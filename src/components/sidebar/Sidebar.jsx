import { useDispatch, useSelector } from "react-redux";
import { setFilters, togglePlatform } from "../../service/redux/filtersSlice";
import { fetchGames } from "../../service/redux/gamesSlice";
import { useState } from "react";
import {
  ChevronDown,
  Star,
  Monitor,
  Filter,
  LayoutGrid,
} from "lucide-react";
import "./Sidebar.css";

const genres = [

  { id: 51, name: "Racing", image: "/genres/race.jpg" },
  { id: 3, name: "Adventure", image: "/genres/adventure.jpg" },
  { id: 4, name: "Action", image: "/genres/action.jpg" },
  { id: 5, name: "Card", image: "/genres/card.webp" },
  { id: 10, name: "Horror", image: "/genres/horror.webp" },
  { id: 2, name: "Shooting", image: "/genres/shooting.webp" },
 
  
  { id: 14, name: "Sports", image: "/genres/sport.webp" },
  { id: 7, name: "Puzzle", image: "/genres/puzzel.jpg" },
 

  { id: 59, name: "Fight", image: "/genres/fight.webp" },
  
];

const platformsList = [
  { id: "1", name: "PC" },
  { id: "18", name: "PlayStation" },
  { id: "7", name: "Nintendo" },
  { id: "3", name: "Xbox" },
  { id: "21", name: "Android" },
  { id: "4", name: "iOS" },
];

export const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const selectedGenres = filters.genres || [];
  const selectedPlatforms = filters.platforms || [];

  const [expandedSection, setExpandedSection] = useState("");

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? "" : section);
  };

  const handlePlatformToggle = (platformId) => {
    dispatch(togglePlatform(platformId));
    dispatch(
      fetchGames({
        page: 1,
        filters: {
          ...filters,
          platforms: togglePlatformInArray(selectedPlatforms, platformId),
        },
      })
    );
  };

  const togglePlatformInArray = (arr, value) => {
    return arr.includes(value)
      ? arr.filter((id) => id !== value)
      : [...arr, value];
  };

  const handleSortChange = (value) => {
    const updatedFilters = { ...filters, ordering: value };
    dispatch(setFilters(updatedFilters));
    dispatch(fetchGames({ page: 1, filters: updatedFilters }));
  };

  const handleGenreClick = (genreId) => {
    const updatedFilters = { ...filters, genres: [genreId] };
    dispatch(setFilters(updatedFilters));
    dispatch(fetchGames({ page: 1, filters: updatedFilters }));
  };

  const clearAllFilters = () => {
    const clearedFilters = { ordering: "-rating" };
    dispatch(setFilters(clearedFilters));
    dispatch(fetchGames({ page: 1, filters: clearedFilters }));
  };

  return (
    <div className="sidebar">
      {/* Filters Header */}
      <div className="sidebar-top">
        <div className="sidebar-title-wrapper">
          <Filter className="filter-icon" />
          <h2 className="sidebar-title">Filters</h2>
        </div>
      </div>

      {/* Genres Section */}
      <div className="sidebar-section">
        <button
          className="sidebar-section-header"
          onClick={() => toggleSection("genres")}
        >
          <div className="sidebar-section-title-wrapper">
            <LayoutGrid size={18} />
            <h2 className="sidebar-title">Genres</h2>
          </div>
          <ChevronDown
            className={`sidebar-section-icon ${
              expandedSection === "genres" ? "rotate" : ""
            }`}
          />
        </button>

        {expandedSection === "genres" && (
          <div className="genre-icons">
            {genres.map((genre) => (
              <div
                key={genre.id}
                className={`genre-row ${
                  selectedGenres.includes(genre.id) ? "selected" : ""
                }`}
                onClick={() => handleGenreClick(genre.id)}
              >
                <img
                  src={genre.image}
                  alt={genre.name}
                  className="genre-icon-img"
                />
                <span className="genre-name">{genre.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Platforms Section */}
      <div className="sidebar-section">
        <button
          className="sidebar-section-header"
          onClick={() => toggleSection("platforms")}
        >
          <div className="sidebar-section-title-wrapper">
            <Monitor size={18} />
            <h3 className="sidebar-section-title">Platforms</h3>
          </div>
          <ChevronDown
            className={`sidebar-section-icon ${
              expandedSection === "platforms" ? "rotate" : ""
            }`}
          />
        </button>

        {expandedSection === "platforms" && (
          <div className="sidebar-section-content">
            <div className="checkbox-group">
              {platformsList.map((platform) => (
                <label key={platform.id} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedPlatforms.includes(platform.id)}
                    onChange={() => handlePlatformToggle(platform.id)}
                    className="checkbox-input"
                  />
                  <span className="checkbox-custom"></span>
                  {platform.name}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sort By Section */}
      <div className="sidebar-section">
        <button
          className="sidebar-section-header"
          onClick={() => toggleSection("sort")}
        >
          <div className="sidebar-section-title-wrapper">
            <Star size={18} />
            <h3 className="sidebar-section-title">Sort By</h3>
          </div>
          <ChevronDown
            className={`sidebar-section-icon ${
              expandedSection === "sort" ? "rotate" : ""
            }`}
          />
        </button>

        {expandedSection === "sort" && (
          <div className="sidebar-section-content">
            <div className="radio-group">
              {[
                { value: "-rating", label: "Rating (High to Low)" },
                { value: "rating", label: "Rating (Low to High)" },
                { value: "-released", label: "Release Date (Newest)" },
                { value: "-added", label: "Recently Added" },
                { value: "-metacritic", label: "Most Popular This Year" }, // ✅ NEW
                { value: "-downloads", label: "Most Downloaded" },         // ✅ NEW (ensure API/backend supports this)
              ].map((option) => (
                <label key={option.value} className="radio-label">
                  <input
                    type="radio"
                    name="sort"
                    value={option.value}
                    checked={(filters.ordering || "-rating") === option.value}
                    onChange={() => handleSortChange(option.value)}
                    className="radio-input"
                  />
                  <span className="radio-custom"></span>
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Clear All Filters Button */}
      <button onClick={clearAllFilters} className="clear-filters-btn">
        <Filter size={16} />
        Clear All Filters
      </button>
    </div>
  );
};
