
//----------------UserList------------------------
export type userType =
    {
        id: number,
        firstName: string | null,
        isFollow: boolean,
        lastName: string | null,
        email: string | null,
        title: string | null,
        picture: string | null,
        quote: string | null,
        adressCountry: string | null,
        adressCity: string | null,
        registerDate: string | null,
    }
type pageSetType =
    {
        currentPage: number,
        allUsersCount: number,
        maxUsersAtPage: number,
        isLoadinFinished: boolean,
    }

export type usersListStateType = {
    usersList: Array<userType>,
    pageSettings: pageSetType
};

//----------------UserList------------------------