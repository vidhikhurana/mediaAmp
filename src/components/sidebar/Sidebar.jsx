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
  { id: 4, name: "Action", image: "/genres/action.jpg" },
  { id: 51, name: "Indie", image: "/genres/indie.jpg" },
  { id: 3, name: "Adventure", image: "/genres/adventure.jpg" },
  { id: 5, name: "RPG", image: "/genres/rpg.jpg" },
  { id: 10, name: "Strategy", image: "/genres/strategy.jpg" },
  { id: 2, name: "Shooter", image: "/genres/shooter.jpg" },
  { id: 40, name: "Casual", image: "/genres/casual.jpg" },
  { id: 14, name: "Simulation", image: "/genres/simulation.jpg" },
  { id: 7, name: "Puzzle", image: "/genres/puzzel.jpg" },
  { id: 11, name: "Arcade", image: "/genres/arcade.jpg" },
  { id: 83, name: "Platformer", image: "/genres/platformer.jpg" },
  { id: 59, name: "Massively Multiplayer", image: "/genres/massively.jpg" },
  { id: 1, name: "Racing", image: "/genres/racing.jpg" },
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

  const [expandedSection, setExpandedSection] = useState("genres");

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
        <div className="sidebar-filter-header">
          <Filter size={18} />
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
              ].map((option) => (
                <label key={option.value} className="radio-label">
                  <input
                    type="radio"
                    name="sort"
                    value={option.value}
                    checked={
                      (filters.ordering || "-rating") === option.value
                    }
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
