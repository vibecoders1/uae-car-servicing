import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Search, MapPin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface MapComponentProps {
  onLocationSelect: (location: string) => void
  selectedLocation: string
}

const MapComponent = ({ onLocationSelect, selectedLocation }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [searchValue, setSearchValue] = useState('')
  const [mapboxToken, setMapboxToken] = useState('')

  const dieraCenter: [number, number] = [55.2962, 25.2697] // Deira, Dubai coordinates

  useEffect(() => {
    // For demo purposes, show an input for the user to add their Mapbox token
    // In production, this would come from environment variables
    const token = localStorage.getItem('mapbox-token')
    if (token) {
      setMapboxToken(token)
    }
  }, [])

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return

    mapboxgl.accessToken = mapboxToken

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: dieraCenter,
      zoom: 12,
    })

    // Add marker for Deira
    const marker = new mapboxgl.Marker({
      color: '#3b82f6',
    })
      .setLngLat(dieraCenter)
      .setPopup(
        new mapboxgl.Popup().setHTML('<p><strong>Deira, Dubai</strong><br/>Popular service area</p>')
      )
      .addTo(map.current)

    // Add click event to select location
    map.current.on('click', (e) => {
      const { lng, lat } = e.lngLat
      onLocationSelect(`${lat.toFixed(4)}, ${lng.toFixed(4)} - Dubai`)
    })

    return () => {
      map.current?.remove()
    }
  }, [mapboxToken, onLocationSelect])

  const handleSearch = () => {
    if (searchValue.trim()) {
      onLocationSelect(searchValue)
    }
  }

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      localStorage.setItem('mapbox-token', mapboxToken)
      window.location.reload() // Reload to initialize map
    }
  }

  if (!mapboxToken) {
    return (
      <div className="w-full h-64 bg-muted rounded-lg flex flex-col items-center justify-center p-6">
        <MapPin className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-lg font-semibold mb-2">Setup Mapbox</h3>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Please enter your Mapbox public token to enable interactive maps
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            placeholder="Mapbox public token..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleTokenSubmit} className="gradient-primary text-white">
            Setup
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Get your token from{' '}
          <a 
            href="https://mapbox.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            mapbox.com
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search location in Dubai..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-10"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <Button onClick={handleSearch} className="gradient-primary text-white">
          Search
        </Button>
      </div>
      
      <div 
        ref={mapContainer} 
        className="w-full h-64 rounded-lg border"
        style={{ minHeight: '256px' }}
      />
      
      {selectedLocation && (
        <div className="p-3 bg-accent/20 rounded-lg">
          <p className="text-sm font-medium text-accent-foreground">Selected Location:</p>
          <p className="text-xs text-muted-foreground">{selectedLocation}</p>
        </div>
      )}
    </div>
  )
}

export default MapComponent