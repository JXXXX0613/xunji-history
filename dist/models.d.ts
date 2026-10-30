export interface Source { title: string; citation: string; type: 'fact' | 'interpretation' | 'fiction' | 'disputed' }
export interface HistoricalPerson { id: string; name: string; dynasty: string; biography: string; timeline: string[]; relatedEvents: string[]; relatedPlaces: string[]; sources: Source[] }
export interface HistoricalEvent { id: string; title: string; dateLabel: string; summary: string; relatedPeople: string[]; relatedPlaces: string[]; sources: Source[]; controversyNotes: string[] }
export interface HistoricalPlace { id: string; name: string; dynasty: string; location: string; description: string; relatedEvents: string[]; relatedPeople: string[]; sources: Source[]; imageCredits: string }
export interface HistoricalNote { id: string; author: string; title: string; content: string; images: string[]; category: string; tags: string; sources: string; visibility: 'public' | 'private'; date: string }
export interface Badge { name: string; type: string; value: number; target: number; task: string; unlockedAt?: string }
export interface CheckIn { id: number; placeId: string; date: string; verificationStatus: 'unverified' }
