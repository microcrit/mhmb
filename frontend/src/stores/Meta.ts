import { create } from 'zustand';

export const useMetaStore = create((set) => ({
    application: 'MHMB',
    description: 'A mental health microblog and community',

    setApplication: (application: string) => set({ application }),
    setDescription: (description: string) => set({ description }),
}));