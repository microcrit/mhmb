export enum MicroblogPrivacy {
    InviteOnly  = "io",
    FriendsOnly = "fo"
}

export interface MicroblogProperties {
    privacy: MicroblogPrivacy;
    invitedUsers?: bigint[];
    posts: bigint[];
}