# Chiefdom Dashboard Mock Data Implementation

## Overview

This implementation provides comprehensive JSON-based mock data for the Chiefdom Dashboard system, supporting **25 chiefdoms** from all 10 provinces of Zambia with realistic traditional leadership data.

## Data Structure

### Chiefdoms Supported (25 Chiefdoms Across 10 Provinces)

#### Lusaka Province
1. **Chieftainess Nkomesha** - Lusaka District
2. **Chief Chipepo** - Chongwe District

#### Central Province
3. **Chief Chitanda** - Kabwe District
4. **Chief Chiundaponde** - Chibombo District
5. **Chief Mukobela** - Mumbwa District

#### Copperbelt Province
6. **Chief Mushili** - Ndola District
7. **Chief Chiwala** - Luanshya District
8. **Chief Nkana** - Kitwe District

#### Eastern Province
9. **Chief Madzimawe** - Chipata District
10. **Chief Nzamane** - Katete District
11. **Chief Kawaza** - Lundazi District

#### Luapula Province
12. **Chief Mwewa** - Mansa District
13. **Chief Kashiba** - Samfya District
14. **Chief Kabanda** - Nchelenge District

#### Northern Province
15. **Senior Chief Chitimukulu** - Kasama District
16. **Chief Tafuna** - Mbala District
17. **Chief Muyombe** - Mpika District

#### North-Western Province
18. **Chief Ishindi** - Solwezi District
19. **Chief Kasempa** - Kasempa District
20. **Chief Sailunga** - Mwinilunga District

#### Southern Province
21. **Chief Mukuni** - Livingstone District
22. **Chief Monze** - Monze District
23. **Chief Cooma** - Choma District

#### Western Province
24. **Chief Inyambo Yeta** - Mongu District
25. **Chief Sikufele** - Senanga District

### Data Categories

Each chiefdom has 6 comprehensive dashboard data files:

#### 1. Land Dashboard (`land-dashboard.json`)
- **Land Distributions**: Historical land allocation data (10 records)
- **Land Conversions**: 50 land conversion applications with various statuses
- **Land Uses**: 50 different land use zones (Agricultural, Settlement, Mining, Protected, Industrial)
- **Mining Projects**: 10 active, exploration, and inactive mining projects

#### 2. Population Dashboard (`population-dashboard.json`)
- **Population Demographics**: Overall chiefdom demographics (1 record)
- **Villages**: 50 villages with detailed information
  - Population, households, village heads
  - GPS coordinates
  - Distance to services
  - Infrastructure access
- **Infrastructure**: 50 facilities (hospitals, clinics, schools, water sources)

#### 3. Health & Education Dashboard (`health-education-dashboard.json`)
- **Health Facilities**: 50 facilities (hospitals, clinics, health posts)
  - Bed capacity, staff, patient volumes
  - Services offered
- **Education Facilities**: 50 schools (primary, secondary, community)
  - Enrollment, capacity, teacher ratios
  - Academic performance metrics
- **Coverage Areas**: 50 service coverage zones

#### 4. Water & Sanitation Dashboard (`water-sanitation-dashboard.json`)
- **Water Sources**: 50 sources (boreholes, piped water, wells, springs)
  - Population served, flow rates, water quality
  - Functional status, maintenance records
- **Water Bodies**: 10 natural water bodies
- **Sanitation Facilities**: 50 facilities
- **Water Access Areas**: 50 zones with access metrics

#### 5. Infrastructure Dashboard (`infrastructure-dashboard.json`)
- **Roads**: 50 road segments with condition and type data
- **Communication Towers**: 50 mobile network towers
- **Connectivity Areas**: 50 zones with connectivity metrics
- **Bridges**: 10 bridge infrastructure records

#### 6. Integrated Development Dashboard (`integrated-development-dashboard.json`)
- **Village Development Profiles**: 50 comprehensive village profiles
  - Multi-dimensional development scores
  - Priority rankings and needs assessment
- **Development KPIs**: 50 key performance indicators
- **Risk Areas**: 50 identified risk zones

### Registry Files

#### Headmen Registry (`headmen-registry.json`)
- **250 Village Headmen** across all 25 chiefdoms (10 per chiefdom)
- Information includes:
  - Jurisdiction areas and boundaries
  - Population under jurisdiction
  - Assigned Induna
  - Years in service
  - Contact information
  - Responsibilities
  - GPS coordinates

#### Indunas Registry (`indunas-registry.json`)
- **20 Indunas** (traditional advisors/counselors)
- Specialized areas:
  - Land Administration
  - Justice & Disputes
  - Development & Projects
  - Cultural Affairs
  - Youth & Education
  - Health & Welfare
- Assigned headmen and villages
- Case handling metrics

#### Jurisdiction Maps (`jurisdiction-maps.json`)
- **125 Administrative Areas** (5 per chiefdom) with:
  - Boundary coordinates (GeoJSON-compatible)
  - Area size in hectares
  - Population data
  - Assigned headman and induna
  - Neighboring areas
  - Key landmarks

## User Interface

### Headmen Registry Page (`/headmen-registry`)
Interactive web interface for viewing and filtering headmen:
- **Summary Dashboard**: Total headmen, chiefdoms, provinces, and population
- **Advanced Filtering**: By province, chiefdom, or name search
- **Detailed View**: Full headman profile with jurisdiction details
- **Responsive Design**: Works on desktop and mobile devices

### Jurisdiction Maps Page (`/jurisdiction-maps`)
Geographic boundaries and administrative areas:
- **Summary Dashboard**: Total jurisdictions, area, and population
- **Interactive Filters**: By province, chiefdom, or area type
- **Detailed View**: Complete jurisdiction information with boundaries
- **Boundary Coordinates**: GPS coordinates for mapping integration

## Technical Implementation

### Service Architecture

All mockservices have been updated to load data from JSON files using `HttpClient`:

```csharp
public class MockLandDashboardService : ILandDashboardService
{
    private readonly HttpClient _httpClient;
    private bool _isInitialized = false;
    private readonly string _chiefdomFolder = "chief-nkomesha"; // Configurable
    
    private async Task InitializeDataAsync()
    {
        try
        {
            var data = await _httpClient.GetFromJsonAsync<LandDashboardData>(
                $"sample-data/{_chiefdomFolder}/land-dashboard.json");
            // Load data...
        }
        catch
        {
            // Fallback to hardcoded data
        }
    }
}
```

### Mockservices Updated

1. ✅ **MockLandDashboardService**
2. ✅ **MockPopulationDashboardService**
3. ✅ **MockHealthEducationDashboardService**
4. ✅ **MockWaterSanitationDashboardService**
5. ✅ **MockInfrastructureDashboardService**
6. ✅ **MockIntegratedDevelopmentDashboardService** (aggregates from other services)

### Features

- **Lazy Loading**: Data is loaded on first access
- **Fallback Mechanism**: If JSON loading fails, services fall back to hardcoded data
- **Null Safety**: All methods handle null data gracefully
- **Async/Await**: All data access is asynchronous
- **Type Safety**: Strong typing with dedicated DTO classes

## File Locations

```
wwwroot/sample-data/
├── chief-nkomesha/              # Lusaka Province
├── chief-chipepo/               # Lusaka Province
├── chief-chitanda/              # Central Province
├── chief-chiundaponde/          # Central Province
├── chief-mukobela/              # Central Province
├── chief-mushili/               # Copperbelt Province
├── chief-chiwala/               # Copperbelt Province
├── chief-nkana/                 # Copperbelt Province
├── chief-madzimawe/             # Eastern Province
├── chief-nzamane/               # Eastern Province
├── chief-kawaza/                # Eastern Province
├── chief-mwewa/                 # Luapula Province
├── chief-kashiba/               # Luapula Province
├── chief-kabanda/               # Luapula Province
├── chief-chitimukulu/           # Northern Province
├── chief-tafuna/                # Northern Province
├── chief-muyombe/               # Northern Province
├── chief-ishindi/               # North-Western Province
├── chief-kasempa/               # North-Western Province
├── chief-sailunga/              # North-Western Province
├── chief-mukuni/                # Southern Province
├── chief-monze/                 # Southern Province
├── chief-cooma/                 # Southern Province
├── chief-inyambo-yeta/          # Western Province
├── chief-sikufele/              # Western Province
│   Each containing 6 dashboard files:
│   ├── land-dashboard.json
│   ├── population-dashboard.json
│   ├── health-education-dashboard.json
│   ├── water-sanitation-dashboard.json
│   ├── infrastructure-dashboard.json
│   └── integrated-development-dashboard.json
├── headmen-registry.json        # 250 headmen
├── indunas-registry.json        # 20 indunas
└── jurisdiction-maps.json       # 125 jurisdiction areas
```

## Data Characteristics

### Realistic Zambian Context

- Village names from actual Zambian localities
- GPS coordinates for Lusaka Province region
- Realistic population densities
- Culturally appropriate traditional leadership titles
- Local economic activities (farming, fishing, mining, trading)

### Data Volume

- **Total Files**: 152 JSON files
- **Total Chiefdoms**: 25 (covering all 10 provinces of Zambia)
- **Total Headmen**: 250 (10 per chiefdom)
- **Total Indunas**: 20 (specialized advisors)
- **Total Jurisdictions**: 125 (5 per chiefdom)
- **Total Records**: ~8,000+ data items
- **Each Dashboard File**: 50+ items per category
- **File Sizes**: Range from 5KB to 150KB per file

### Data Quality

- Randomized but realistic values
- Consistent relationships between data
- Proper date ranges
- GPS coordinates within valid ranges
- Status values reflect real-world scenarios

## Usage

### Switching Chiefdoms

To change the chiefdom data source, modify the `_chiefdomFolder` parameter in each service:

```csharp
private readonly string _chiefdomFolder = "subchief-chongwe"; // Change this
```

### Adding New Chiefdoms

1. Create a new folder in `wwwroot/sample-data/`
2. Add all 6 dashboard JSON files
3. Update the chiefdom name and coordinates in the data
4. Configure services to use the new folder

### Extending Data

The JSON files can be easily extended or modified:
- Add more items to arrays
- Add new properties to existing objects
- Create additional data categories

## Future Enhancements

Potential improvements:

1. **Configuration-based Chiefdom Selection**: Allow runtime selection of chiefdom
2. **Data Validation**: JSON schema validation
3. **Caching**: Implement data caching to reduce file reads
4. **API Integration**: Easy migration path to real API endpoints
5. **Data Generation Tools**: Automated data generation scripts
6. **Localization**: Multi-language support for data labels

## Generated With

Data was generated using a Python script (`generate_chiefdom_data.py`) that creates:
- Randomized but realistic data
- Proper geographic distributions
- Consistent relationships between entities
- Appropriate value ranges for each data type

## Models

New models added for traditional leadership:

- `Headman` - Village headman information
- `Induna` - Traditional advisor/counselor
- `JurisdictionMap` - Geographic boundaries and administration
- `GeoCoordinate` - GPS coordinates for mapping

Located in: `Models/HeadmanRegistry.cs`

## Notes

- All services maintain backward compatibility with hardcoded fallback data
- JSON files are served as static assets from wwwroot
- No database required for development and testing
- Easy to version control and share sample data
- Suitable for demos, testing, and development

## Testing

To verify the implementation:

1. Run the ChiefdomApp application
2. Navigate to dashboard pages
3. Observe data loading from JSON files
4. Check browser network tab for JSON file requests
5. Verify data displays correctly in UI components

## Support

For issues or questions about the mock data implementation, refer to:
- Service implementations in `Services/` directory
- Model definitions in `Models/` directory
- JSON file structure in `wwwroot/sample-data/`
