# 🏏 T20 World Cup 2024 Analytics Dashboard

A comprehensive data analytics project that provides deep insights into the ICC Men's T20 World Cup 2024 through web scraping, data processing, and interactive visualizations using Power BI.

## 📊 Project Overview

This project offers a complete end-to-end solution for cricket analytics, featuring:
- **Web Scraping**: Automated data collection from ESPNcricinfo
- **Data Processing**: Comprehensive data cleaning and transformation
- **Interactive Dashboard**: Rich Power BI visualizations with drill-down capabilities
- **Player Analytics**: Detailed batting and bowling performance analysis

## 🎯 Key Features

### 🛠️ Technical Stack
- **Data Collection**: JavaScript web scraping scripts
- **Data Processing**: Python (Pandas, NumPy)
- **Visualization**: Microsoft Power BI
- **Data Storage**: CSV format for easy analysis

## 📁 Project Structure

```
T20WorldCup2024-Analytics/
├── 📊 data(csv_files)/
│   ├── match_data.csv          # Match results and outcomes
│   ├── bating_data.csv         # Detailed batting statistics
│   ├── bowling_data.csv        # Comprehensive bowling data
│   └── players_data.csv        # Player profiles and information
├── 🕷️ web_scrapping_codes/
│   ├── t20_wc_batting_summary.js    # Batting data scraper
│   ├── t20_wc_bowling_summary.js    # Bowling data scraper
│   ├── t20_wc_match_results.js      # Match results scraper
│   └── t20_wc_player_info.js        # Player information scraper
├── 📝 data_preprocessing.ipynb      # Data cleaning and transformation
├── 📊 wc24_PB.pbix                  # Interactive Power BI dashboard
└── 📖 README.md                     # Project documentation
```

## 🗃️ Data Sources

### Primary Data Collection
- **ESPNcricinfo**: Official match statistics and player data
- **Comprehensive Coverage**: All 20 participating teams and 55 matches

### Data Categories
1. **Match Data**: 55 matches with results, venues, dates, and margins
2. **Batting Data**: 854+ batting innings with detailed statistics
3. **Bowling Data**: 597+ bowling spells with performance metrics
4. **Player Data**: 276+ player profiles with career information

## 🚀 Getting Started

### Prerequisites
- Microsoft Power BI Desktop
- Python 3.7+ (for data preprocessing)
- Web browser with JavaScript enabled (for scraping)

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   cd T20WorldCup2024-Analytics
   ```

2. **Data Collection** (Optional - data already provided)
   ```bash
   # Run web scraping scripts to collect fresh data
   cd web_scrapping_codes/
   # Execute JavaScript files in your preferred environment
   ```

3. **Data Preprocessing**
   ```bash
   # Open Jupyter notebook
   jupyter notebook data_preprocessing.ipynb
   ```

4. **Dashboard Access**
   - Open `wc24_PB.pbix` in Power BI Desktop
   - Refresh data connections if needed
   - Explore interactive visualizations

