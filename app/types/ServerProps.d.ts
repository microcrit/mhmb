export default interface ServerProps {
    meta: {
        title: string;
        description: string;
    };
    reactionTypes: Record<string, string>; // "name": "iconUrl"
};