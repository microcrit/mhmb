import { Permission } from "@/types/internal/Permission";

export default {
    "founder": [
        Permission.All
    ],

    "admin": [
        Permission.GlobalUserView,

        Permission.UserEdit,
        Permission.UserDelete,
        
        Permission.CommunityApprove,
    
        Permission.Dashboard,
    ],
    "user": [
        Permission.BreakdownTrackEdit,
        Permission.BreakdownTrackView,
        Permission.BreakdownTrackAddEvent,

        Permission.MoodTrackEdit,
        Permission.MoodTrackView,
        Permission.MoodTrackAddPoint,

        Permission.CommunityApply,
        Permission.CommunityPost,

        Permission.MutualFriendView,
        Permission.FriendView,
        Permission.FriendBlock,
        Permission.FriendRemove,
        Permission.FriendAdd,


        Permission.IOMicroblogCreate,
        Permission.Microblog,
    ],
    "AI": [
        Permission.AISummarize,
    ],
    "paid": [
        Permission.ConferenceJoin,
        Permission.ConferenceSchedule,
        Permission.ConferenceTalk,
        Permission.ConferenceChat,

        Permission.CommunityEdit,
        Permission.CommunityCreate,
    ],
    "dedicated": [
        Permission.ConferenceCreate,
        Permission.ConferenceAdvertise,
        Permission.ConferenceEdit,
        Permission.ConferenceDelete,
    ],
}