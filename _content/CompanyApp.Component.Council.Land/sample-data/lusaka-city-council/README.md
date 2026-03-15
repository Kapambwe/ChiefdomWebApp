# Lusaka City Council - Council.Land Component Sample Data

## Overview
This directory contains comprehensive sample data for the Council.Land Component Mock services focusing on customary land management. All data is specific to Lusaka City Council's customary land operations with realistic Zambian context.

## Mock Services and JSON File Mappings

### 1. MockCustomaryLandService
**File:** `customary-land.json` (30 entries)
- **Purpose:** Customary land allocation and certificate management
- **Key Fields:** landCode, chiefdom, plotNumber, landSize, ownerName, certificateNumber
- **Chiefdoms:** Chief Nkomesha, Chief Chikwa, Chief Shakumbila, Chief Chamuka
- **Land Use Types:** Residential, Agricultural, Mixed Use, Grazing Land, Village Settlement
- **Certificate Status:** Issued, Pending, Under Process, Renewal Required
- **Legal Recognition:** Traditional land tenure systems integrated with statutory framework

**Key Features:**
- NRC-based owner identification
- Witness documentation (Chief/Headman/Village representative)
- Boundary descriptions (cardinal directions)
- Dispute tracking and resolution
- Conversion to statutory land tracking
- Survey status monitoring

**Data Points:**
- Land sizes: 5-100 hectares
- Allocation dates: 2015-2024
- Certificate numbers with CERT-CUST prefix
- Comprehensive boundary information

### 2. MockCustomaryLandWorkflowDesignerService
**File:** `customary-land-workflow-designer.json` (30 entries)
- **Purpose:** Workflow automation for customary land processes
- **Key Fields:** workflowId, workflowName, landCode, currentStage, stageProgress
- **Workflow Types:** Land Allocation, Certificate Issuance, Conversion to Statutory, Dispute Resolution, Transfer of Rights, Boundary Survey, Land Use Change

**Workflow Stages:**
1. Application Received
2. Verification
3. Chief Approval
4. Survey
5. Certificate Preparation
6. Final Approval

**Key Features:**
- Multi-stage process tracking
- Document management (required vs submitted)
- Chief approval integration
- Pending action alerts
- Priority classification
- Expected vs actual completion dates

**Status Types:**
- In Progress
- Pending
- Completed
- On Hold
- Rejected

## Customary Land Management Context

### Traditional Authority Integration
- Chief's approval required for all allocations
- Village headman/elder witnessing
- Traditional boundary markers recognition
- Community consultation processes

### Conversion Process
Customary land can be converted to statutory tenure through:
1. Application submission
2. Survey requirement
3. Chief's consent
4. Technical review
5. Title deed issuance

### Legal Framework
- Lands Act (Cap 184)
- Town and Country Planning Act
- Local Government Act
- Customary tenure recognition

### Dispute Resolution
- Traditional dispute mechanisms
- Local courts
- Alternative dispute resolution
- Escalation to statutory courts

## Data Characteristics

### Currency
- All financial amounts in ZMW (Zambian Kwacha)

### Date Format
- ISO 8601 format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS

### Property Naming
- camelCase convention for all JSON properties

### Land Measurement
- Primary unit: Hectares
- Range: 5-100 hectares per allocation
- Boundary descriptions in cardinal directions

### Identification
- Owner NRC format: XXXXXX/XX/X (Zambian National Registration Card)
- Plot numbers: CUST-XXXX format
- Certificate numbers: CERT-CUST-XXXXX format

## Chiefs and Chiefdoms

### Active Chiefdoms in Lusaka
1. **Chief Nkomesha** - Traditional authority in Lusaka rural areas
2. **Chief Chikwa** - Customary land jurisdiction
3. **Chief Shakumbila** - Community land management
4. **Chief Chamuka** - Traditional land allocation

## Workflow Process Details

### Land Allocation Workflow
1. **Application Stage** - Community member applies
2. **Verification Stage** - Land availability check, applicant eligibility
3. **Chief Approval** - Traditional authority consent
4. **Survey Stage** - Boundary demarcation (if required)
5. **Certificate Preparation** - Document generation
6. **Final Approval** - Certificate issuance

### Certificate Issuance Timeline
- Standard process: 30-90 days
- With survey: 60-120 days
- Complex cases: 90-180 days

### Conversion to Statutory Tenure
1. Application with Chief's consent
2. Survey mandatory
3. Land use clearance
4. Environmental clearance (if required)
5. Title deed issuance

## Wards with Customary Land

While most of Lusaka is statutory land, certain peripheral areas have customary land:
- Kabulonga (peripheral areas)
- Chelston (some sections)
- Chainda (rural sections)
- Garden (outer areas)

## Usage Notes

1. **Sample Data Only:** This data is for development and testing purposes
2. **Traditional Context:** Respects Zambian customary land tenure systems
3. **Legal Compliance:** Aligns with Zambian land laws and regulations
4. **Chief Authority:** Recognizes traditional leadership in land allocation
5. **Conversion Ready:** Supports transition to statutory tenure

## Key Challenges Addressed

### Dispute Management
- Boundary disputes tracked
- Resolution mechanisms integrated
- Historical context preservation

### Documentation
- Witness requirements
- Chief approval documentation
- Succession planning

### Modernization
- Digital record keeping
- Workflow automation
- Integration with statutory systems

## File Location
```
/src/Components/CompanyApp.Component.Council.Land/wwwroot/sample-data/lusaka-city-council/
```

## Integration
These JSON files are designed to be consumed by their respective Mock services to provide realistic data for:
- Development and testing
- UI component demos
- Customary land management training
- Workflow process demonstrations
- Traditional-modern system integration testing

## Zambian Land Tenure Context

### Dual Land Tenure System
1. **Statutory Tenure** - Leasehold titles (urban areas)
2. **Customary Tenure** - Traditional allocation (rural areas)

### Land Rights Recognition
- Customary land rights legally recognized
- Protection of traditional tenure
- Conversion options available
- Gender equity considerations

## Last Updated
2025-01-19
