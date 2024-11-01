export enum Permission {
    // Admin perms
    All                     = "*",

    Dashboard               = "dashboard",

    CommunityApprove        = "communityApprove",
    UserDelete              = "userDelete",
    UserEdit                = "userEdit",
    GlobalUserView          = "globalUserView",

    // AI-enabled perms (specified in DB by user+AI, base "user" + modifier "AI")
    AISummarize             = "aiSummarize",

    // Regular user perms
    Microblog               = "microblog",
    IOMicroblogCreate       = "ioMicroblogCreate",

    FriendAdd               = "friendAdd",
    FriendRemove            = "friendRemove",
    FriendBlock             = "friendBlock",
    FriendView              = "friendView",

    MutualFriendView        = "mutualFriendView",
    
    MoodTrackAddPoint       = "moodTrack",
    MoodTrackView           = "moodTrackView",
    MoodTrackEdit           = "moodTrackEdit",

    BreakdownTrackAddEvent  = "breakdownTrack",
    BreakdownTrackView      = "breakdownTrackView",
    BreakdownTrackEdit      = "breakdownTrackEdit",

    // Paid plan permissions (optional)
    CommunityApply          = "communityApply",
    CommunityPost           = "communityPost",
    CommunityCreate         = "communityCreate",
    CommunityEdit           = "communityEdit",

    ConferenceSchedule      = "conferenceSchedule",
    ConferenceJoin          = "conferenceJoin",
    ConferenceTalk          = "conferenceTalk",
    ConferenceChat          = "conferenceChat",

    // Dedicated-user permissions
    ConferenceCreate        = "conferenceCreate",
    ConferenceAdvertise     = "conferenceAdvertise",
    ConferenceEdit          = "conferenceEdit",
    ConferenceDelete        = "conferenceDelete",
}