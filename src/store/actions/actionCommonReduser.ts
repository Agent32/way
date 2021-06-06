export const changeLoadStatus = (status: boolean) =>
  ({
    type: 'CHANGE-LOADING-STATUS',
    status
  } as const)

export const initComplete = () => ({ type: 'APP-INIT-DONE' } as const)
