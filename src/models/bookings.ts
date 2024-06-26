export interface Bookings {
    _id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    pickup: string,
    destination: string,
    wheelchair: string,
    passenger: number,
    purpose: string,
    trip: string,
    date: string,
    pickupTime: string,
    dropoffTime: string,
    additionalNotes?: string,
    createdAt: string,
}

export interface BookingsPagesProps {
    bookings: Bookings[];
    total : number;
    page: number;
    limit: number;
}
