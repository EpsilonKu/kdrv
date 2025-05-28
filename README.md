# KDRV UI

A Svelte UI component library built with Tailwind CSS.

## Installation

```bash
npm install kdrv-ui
```

## Usage

### Importing Components

```svelte
<script>
  import { Button } from 'kdrv-ui';
</script>

<Button>Click me</Button>
```

### Importing Styles

You can import the styles in your main layout file or entry point:

```svelte
<script>
  import 'kdrv-ui/styles.css';
</script>
```

### Available Components

The library exports the following components:

- UI Components
  - `Button` - A customizable button component

Additional components are in development:
- Layout components (Header, Footer, Hero, Divider)
- Functional components (TrackingSearch, PackageDetails)

## Development

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

### Building the Library

```bash
# Build the library
npm run build:lib
```

### Testing

```bash
# Run tests
npm run test
```

## Contributing

To add new components:

1. Create your component in `src/lib/components/ui/[component-name]/`
2. Add an `index.ts` file to export your component
3. Update the main exports in `src/lib/index.ts`

## License

MIT
