const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

export type locationType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    photoURl: string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}

export type  initialStateType = typeof initialState
const initialState = {
    users: [] as Array<UserType>,
}


export const usersReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true } : u)]}
        case "UNFOLLOW":
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false } : u)]}
        case "SET-USERS":
            return {...state, users:[...action.users]}
        default :
            return state
    }
}

export type ActionsType = unfollowActionType | followActionType | setUsersActionType


export type followActionType = ReturnType<typeof followAC>
export const followAC = (userId: string)=> {
    return {
        type: FOLLOW,
        userId
    } as const
}

export type unfollowActionType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: string) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export type setUsersActionType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}