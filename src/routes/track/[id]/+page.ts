import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const trackingId = params.id;

  // Simulate fetching data for the given trackingId
  // In a real application, this would be an API call:
  // const response = await fetch(`/api/package/\${trackingId}`);
  // const packageInfo = await response.json();

  // Mock data for now, similar to what was in PackageDetails.svelte
  const mockPackageInfo = {
    trackingNumber: trackingId,
    status: 'In Transit',
    estimatedDelivery: 'June 18, 2024', // Adjusted date for clarity
    origin: 'Berlin, Germany',
    destination: 'Munich, Germany',
    updates: [
      { 
        status: 'Package picked up', 
        location: 'Berlin Warehouse', 
        date: 'June 13, 2024',
        time: '09:15 AM',
        completed: true 
      },
      { 
        status: 'Package in transit', 
        location: 'Berlin Sorting Facility', 
        date: 'June 14, 2024',
        time: '02:30 PM',
        completed: true 
      },
      { 
        status: 'Package in delivery vehicle', 
        location: 'Munich Distribution Center', 
        date: 'June 15, 2024',
        time: '10:45 AM',
        completed: true 
      },
      { 
        status: 'Out for delivery', 
        location: 'Munich', 
        date: 'June 16, 2024', // Adjusted date
        time: '08:20 AM',
        completed: false 
      },
      { 
        status: 'Delivered', 
        location: 'Munich', 
        date: 'June 18, 2024', // Adjusted date
        time: 'Pending',
        completed: false 
      }
    ]
  };

  if (trackingId) {
    return {
      props: {
        packageInfo: mockPackageInfo,
        trackingId: trackingId
      }
    };
  }

  // Optionally, handle case where trackingId might not be found,
  // though SvelteKit's routing usually ensures params.id exists.
  // You could throw an error or return a specific status.
  // For now, we assume trackingId is always present.
};
