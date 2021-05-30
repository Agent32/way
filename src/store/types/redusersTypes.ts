
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
        dateOfBirth? : string | null,
        phone?: string | null,
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

//----------------Profile------------------------


type wallPostType =
{
    id: number,
    userId:number,
    picture: string | null,
    text: string | null,
    createdAt: string | null,
    likes: boolean,
  }
  type profileSettingsType =
{
    wallText: string | null,
    isLoadinFinished: boolean,
    whatEdit: any,
    isEditorOneNeed: boolean,
  }


export type profileMainType = {
    postsWall: Array<wallPostType>,
    userData: userType,
    changedText:profileSettingsType

};

//----------------PMlist------------------------

export type usersPmListType =
    {
        adressCity: string | null,
        adressCountry: string | null,
        email: string | null,
        firstName: string | null,
        id: number | null,
        isFollow: boolean | null,
        lastName: string | null,
        phone: string | null,
        picture: string | null,
        quote: string | null,
        registerDate: string | null,
        title: string | null,
    }

export type selectedDiadlogType =
    {
        userId: number | null,
        text: string | null,
        avatar: string | null,
        pmId: number | null,
        firstName: string | null
    }

type pmSettings =
    {
        isUserSelected: boolean,
    }



  export  type pmMainType = {
        usersPMlist: Array<usersPmListType>,
        selectedDiadlog: Array<selectedDiadlogType>,
        pmSettings: pmSettings
    }