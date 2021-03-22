import moment from 'moment'
export const disabledDate = (current: any) => {
  return current && current <= moment().startOf('day')
}

export const capitalize = (s: string | undefined): string => {
  if (typeof s !== 'string') return ''
  s = s.toLowerCase()
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const getTime = (dateTime: number): string => {
  if (dateTime !== 0) {
    const time = new Date(dateTime)
    var hours: string | number = time.getHours()
    var minutes: string | number = time.getMinutes()
    var day: string | number = time.getDate()
    var month: string | number = time.getMonth() + 1
    var year: string | number = time.getFullYear()
    if (hours > 11) {
      if (hours !== 12) {
        hours = hours - 12
      }
    }
    if (hours < 10) {
      hours = `0${hours}`
    }
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    if (day < 10) {
      day = `0${day}`
    }
    if (month < 10) {
      month = `0${month}`
    }
    return `${day}/${month}/${year}`
  } else {
    return ' '
  }
}

export const deleteTypeName = (item: any): any => {
  const deleteType = (item: any): any => {
    var newItem = JSON.parse(JSON.stringify(item))

    var keys = Object.keys(newItem)

    keys.find(e => e === '__typename') && delete newItem['__typename']

    keys = Object.keys(newItem)

    for (let k = 0; k < keys.length; k++) {
      if (newItem[keys[k]] && typeof newItem[keys[k]] === 'object') {
        newItem[keys[k]] = deleteTypeName(newItem[keys[k]])
      }
    }
    return newItem
  }

  var newItem = JSON.parse(JSON.stringify(item))

  if (newItem?.length > 0) {
    for (let k = 0; k < newItem.length; k++) {
      newItem[k] = deleteType(newItem[k])
    }
  } else {
    newItem = deleteType(newItem)
  }
  return newItem
}

export const eliminarDiacriticos = (texto: string): string => {
  if (typeof texto !== 'string') return ''
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export const idioms = ['es', 'en', 'fr', 'de', 'it']

export const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5'
      }
    ]
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161'
      }
    ]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#bec2fe'
      },
      {
        weight: 0.5
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd'
      }
    ]
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      {
        color: '#aa7942'
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.province',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e'
      }
    ]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5'
      }
    ]
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e'
      }
    ]
  }
]
