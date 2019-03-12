export const makePlatformAppMock = (
    payload: { [key in keyof PlatformApp]?: PlatformApp[key] } = {}
  ): PlatformApp => {
  return Object.assign({}, {
      platform: 'this is mock string',
      id: 'this is mock string',
      country: 'this is mock string',
      language: 'this is mock string',
      icon_url: 'this is mock string',
      name: 'this is mock string',
      developer_name: 'this is mock string',
      categories: new Array(3).toString().split(',').map(() => Object.assign({}, makePlatformAppCategoryMock())),
      other_apps: new Array(3).toString().split(',').map(() => Object.assign({}, makePlatformAppOtherAppMock())),
      store_apps: new Array(3).toString().split(',').map(() => Object.assign({}, makePlatformAppStoreAppMock()))
    }, payload)
}

export const makePlatformAppCategoryMock = (
    payload: { [key in keyof PlatformAppCategory]?: PlatformAppCategory[key] } = {}
  ): PlatformAppCategory => {
  return Object.assign({}, {
      id: 'this is mock string',
      name: 'this is mock string'
    }, payload)
}

export const makePlatformAppOtherAppMock = (
    payload: { [key in keyof PlatformAppOtherApp]?: PlatformAppOtherApp[key] } = {}
  ): PlatformAppOtherApp => {
  return Object.assign({}, {
      id: 'this is mock string',
      platform: 'this is mock string',
      store: 'this is mock string'
    }, payload)
}

export const makePlatformAppStoreAppMock = (
    payload: { [key in keyof PlatformAppStoreApp]?: PlatformAppStoreApp[key] } = {}
  ): PlatformAppStoreApp => {
  return Object.assign({}, {
      id: 'this is mock string',
      store: 'this is mock string'
    }, payload)
}