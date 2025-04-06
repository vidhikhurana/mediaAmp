import { Button, ButtonGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setFilters } from '../features/games/gamesSlice'

const platforms = [
  { id: 4, name: 'PC' },
  { id: 18, name: 'PlayStation' },
  { id: 7, name: 'Nintendo' },
  { id: 1, name: 'Xbox' },
  { id: 21, name: 'Android' },
  { id: 3, name: 'iOS' }
]

export default function PlatformFilter() {
  const dispatch = useDispatch()

  const handlePlatformSelect = (platformId) => {
    dispatch(setFilters({ platforms: platformId }))
  }

  return (
    <div className="mb-4">
      <h5>Platforms</h5>
      <ButtonGroup className="flex-wrap">
        {platforms.map(platform => (
          <Button
            key={platform.id}
            variant="outline-primary"
            onClick={() => handlePlatformSelect(platform.id)}
            className="m-1"
          >
            {platform.name}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  )
}