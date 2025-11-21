# Farm Setup Wizard

## Overview

The Farm Setup Wizard is a comprehensive onboarding flow that guides new users through setting up their farm profile in ARMS (Agronomy Record Management System).

## Features

### Multi-Step Wizard Process

The setup wizard consists of 4 steps:

1. **Farm Details**

   - Farm name
   - Farm type (greenhouse, open field, hydroponics, etc.)
   - Farm description

2. **Location Information**

   - Street address
   - City, State/Province, Country
   - GPS coordinates (latitude & longitude)
   - Built-in geolocation support to auto-fill coordinates

3. **Size & Area**

   - Total farm area with customizable units (hectares, acres, sq meters, sq feet)
   - Cultivable area
   - Number of greenhouses/sections

4. **Additional Information**
   - Soil type
   - Irrigation system
   - Primary crops
   - Years of operation

### Setup Status Tracking

- **Setup Status Component**: Displays the completion status of farm setup
  - Shows warning banner on dashboard if setup is incomplete
  - Shows inline status badge in sidebar
  - Automatically tracks completion via localStorage

### Automatic Redirect Logic

- **After Registration**: New users are automatically redirected to `/setup`
- **After Login**: Existing users are redirected to `/setup` if they haven't completed it, otherwise to `/dashboard`
- **Skip Option**: Users can skip setup on the first step, but will continue to see reminders

## Routes

- `/setup` - Farm setup wizard page
- Component: `/components/setup-status.tsx` - Setup status indicator

## Implementation Details

### State Management

Currently using localStorage for setup status tracking:

- `farmSetupComplete`: Boolean flag indicating if setup is done
- `farmSetupData`: JSON object storing all farm setup information

### Future Improvements

- [ ] Integrate with backend API to persist farm data
- [ ] Add form validation for all required fields
- [ ] Add ability to edit farm setup after completion
- [ ] Add progress saving (allow users to resume partial setup)
- [ ] Add image upload for farm photos
- [ ] Integrate with map API for address autocomplete

## Components

### SetupStatus

**Props:**

- `className?: string` - Additional CSS classes
- `showInline?: boolean` - Display as inline badge vs full card

**Usage:**

```tsx
import { SetupStatus } from '@/components/setup-status';

// Full card display (default)
<SetupStatus />

// Inline badge display
<SetupStatus showInline />
```

### useSetupStatus Hook

Custom hook to check setup status in components:

```tsx
import { useSetupStatus } from "@/components/setup-status";

const { isSetupComplete, isLoading } = useSetupStatus();
```

## User Experience Flow

```
Registration/Login
        ↓
Is setup complete?
   ↙          ↘
  NO          YES
   ↓           ↓
/setup    /dashboard
   ↓
Complete wizard
   ↓
/dashboard
```

## Styling

The wizard uses the ARMS color scheme:

- Primary: `#1F8A34` (Green)
- Warning: Amber tones for incomplete status
- Success: Green tones for completed status

All components are fully responsive and work on mobile, tablet, and desktop devices.
