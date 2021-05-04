export const getBlogs = /* GraphQL */ `
  query getBlogs($_id: inputId) {
    getBlogs(_id: $_id) {
      _id
      date
      image {
        filename
        key
      }
      es {
        text
        title
        description
      }
      en {
        text
        title
        description
      }
      fr {
        text
        title
        description
      }
      de {
        text
        title
        description
      }
      it {
        text
        title
        description
      }
    }
  }
`

export const getCountry = /* GraphQL */ `
  query getCountry($_id: inputId) {
    getCountry(_id: $_id) {
      _id
      name
      latlng
      translations {
        de
        es
        fr
        ja
        it
        br
        pt
        nl
        hr
        fa
      }
      nativeName
      createdAt
      updatedAt
    }
  }
`
export const getEvents = /* GraphQL */ `
  query getEvents($_id: inputId) {
    getEvents(_id: $_id) {
      _id
      date
      description
      title
      image {
        filename
        key
      }
    }
  }
`

export const listFraternityWeb = /* GraphQL */ `
  query listFraternityWeb {
    listFraternityWeb {
      _id
      name
      province {
        _id
        name
      }
      country {
        _id
        name
        latlng
        translations {
          de
          es
          fr
          ja
          it
          br
          pt
          nl
          hr
          fa
        }
        nativeName
        createdAt
        updatedAt
      }
      state
      city
      address
      phone1
      phone2
      cel
      email
      opened
      closed
      photo {
        filename
        key
      }
      shouldShow
    }
  }
`

export const getFraternityWeb = /* GraphQL */ `
  query getFraternityWeb($country: ID) {
    getFraternityWeb(country: $country) {
      _id
      name
      province {
        _id
        name
        country {
          _id
          name
          latlng
          translations {
            de
            es
            fr
            ja
            it
            br
            pt
            nl
            hr
            fa
          }
          nativeName
          createdAt
          updatedAt
        }
        state
        city
        address
        phone1
        phone2
        fax
        link
        email
        opened
        closed
        photo {
          filename
          key
        }
        shouldShow
        createdAt
        updatedAt
      }
      country {
        _id
        name
        latlng
        nativeName
        createdAt
        updatedAt
      }
      state
      city
      address
      phone1
      phone2
      cel
      email
      opened
      closed
      photo {
        filename
        key
      }
      shouldShow
    }
  }
`
export const getIds = /* GraphQL */ `
  query getIds {
    getIds
  }
`
export const getLastBlog = /* GraphQL */ `
  query getLastBlog {
    getLastBlog {
      _id
      date
      image {
        filename
        key
      }
      es {
        text
        title
        description
      }
      en {
        text
        title
        description
      }
      fr {
        text
        title
        description
      }
      de {
        text
        title
        description
      }
      it {
        text
        title
        description
      }
    }
  }
`
export const getLastNews = /* GraphQL */ `
  query getLastNews {
    getLastNews {
      _id
      date
      image {
        filename
        key
      }
      es {
        text
        title
        description
      }
      en {
        text
        title
        description
      }
      fr {
        text
        title
        description
      }
      de {
        text
        title
        description
      }
      it {
        text
        title
        description
      }
    }
  }
`
export const getMisionWebToWeb = /* GraphQL */ `
  query getMisionWebToWeb($type: String) {
    getMisionWebToWeb(type: $type) {
      _id
      date
      image {
        filename
        key
      }
      type
      es {
        text
        title
        description
      }
      en {
        text
        title
        description
      }
      fr {
        text
        title
        description
      }
      de {
        text
        title
        description
      }
      it {
        text
        title
        description
      }
    }
  }
`
export const getMisionsWeb = /* GraphQL */ `
  query getMisionsWeb($_id: inputId) {
    getMisionsWeb(_id: $_id) {
      _id
      date
      image {
        filename
        key
      }
      type
      es {
        text
        title
        description
      }
      en {
        text
        title
        description
      }
      fr {
        text
        title
        description
      }
      de {
        text
        title
        description
      }
      it {
        text
        title
        description
      }
    }
  }
`
export const getNews = /* GraphQL */ `
  query getNews($_id: inputId) {
    getNews(_id: $_id) {
      _id
      date
      image {
        filename
        key
      }
      es {
        text
        title
        description
      }
      en {
        text
        title
        description
      }
      fr {
        text
        title
        description
      }
      de {
        text
        title
        description
      }
      it {
        text
        title
        description
      }
    }
  }
`
export const getPages = /* GraphQL */ `
  query getPages($name: String) {
    getPages(name: $name) {
      _id
      name
      es
      en
      fr
      de
      it
      mainPhoto {
        filename
        key
      }
      photos {
        name
        photos {
          _id
          filename
          key
        }
      }
      colors {
        name
        color
      }
    }
  }
`

export const getProvincesWeb = /* GraphQL */ `
  query getProvincesWeb {
    getProvincesWeb {
      _id
      name
      country {
        _id
        name
        latlng
        translations {
          de
          es
          fr
          ja
          it
          br
          pt
          nl
          hr
          fa
        }
        nativeName
        createdAt
        updatedAt
      }
      state
      city
      address
      phone1
      phone2
      fax
      link
      email
      opened
      closed
      photo {
        filename
        key
      }
      shouldShow
      createdAt
      updatedAt
    }
  }
`

export const listBlogs = /* GraphQL */ `
  query listBlogs {
    listBlogs {
      _id
      date
      image {
        filename
        key
      }
      es {
        text
        title
        description
      }
      en {
        text
        title
        description
      }
      fr {
        text
        title
        description
      }
      de {
        text
        title
        description
      }
      it {
        text
        title
        description
      }
    }
  }
`

export const listCountry = /* GraphQL */ `
  query listCountry {
    listCountry {
      _id
      name
      latlng
      translations {
        de
        es
        fr
        ja
        it
        br
        pt
        nl
        hr
        fa
      }
      nativeName
      createdAt
      updatedAt
    }
  }
`
export const listEvents = /* GraphQL */ `
  query listEvents {
    listEvents {
      _id
      date
      description
      title
      image {
        filename
        key
      }
    }
  }
`

export const listMisionsWeb = /* GraphQL */ `
  query listMisionsWeb {
    listMisionsWeb {
      _id
      date
      image {
        filename
        key
      }
      type
      es {
        text
        title
        description
      }
      en {
        text
        title
        description
      }
      fr {
        text
        title
        description
      }
      de {
        text
        title
        description
      }
      it {
        text
        title
        description
      }
    }
  }
`
export const listNews = /* GraphQL */ `
  query listNews {
    listNews {
      _id
      date
      image {
        filename
        key
      }
      es {
        text
        title
        description
      }
      en {
        text
        title
        description
      }
      fr {
        text
        title
        description
      }
      de {
        text
        title
        description
      }
      it {
        text
        title
        description
      }
    }
  }
`
export const listObras = /* GraphQL */ `
  query listObras($province: ID) {
    listObras(province: $province) {
      _id
      name
      province {
        _id
        name
        country {
          _id
          name
          latlng
          translations {
            de
            es
            fr
            ja
            it
            br
            pt
            nl
            hr
            fa
          }
          nativeName
          createdAt
          updatedAt
        }
        state
        city
        address
        phone1
        phone2
        fax
        link
        email
        opened
        closed
        photo {
          filename
          key
        }
        shouldShow
        createdAt
        updatedAt
      }
      fraternity {
        _id
        name
        province {
          _id
          name
          state
          city
          address
          phone1
          phone2
          fax
          link
          email
          opened
          closed
          shouldShow
          createdAt
          updatedAt
        }
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        misionApostol {
          _id
          name
          province {
            _id
            name
            state
            city
            address
            phone1
            phone2
            fax
            link
            email
            opened
            closed
            shouldShow
            createdAt
            updatedAt
          }
          fraternity {
            _id
            name
            state
            city
            address
            phone1
            phone2
            cel
            email
            opened
            closed
            photo {
              filename
              key
            }
            shouldShow
          }
          country {
            _id
            name
            latlng
            nativeName
            createdAt
            updatedAt
          }
          mision {
            _id
            name
          }
          state
          city
          address
          phone1
          phone2
          cel
          email
          fax
          opened
          closed
          finality
        }
        state
        city
        address
        phone1
        phone2
        cel
        email
        opened
        closed
        shouldShow
      }
      country {
        _id
        name
        latlng
        nativeName
        createdAt
        updatedAt
      }
      mision {
        _id
        name
      }
      state
      city
      address
      phone1
      phone2
      cel
      email
      fax
      opened
      closed
      finality
    }
  }
`

export const getProvinces = /* GraphQL */ `
  query getProvinces($_id: inputId) {
    getProvinces(_id: $_id) {
      _id
      name
      country {
        _id
        name
      }
      state
      city
      address
      phone1
      phone2
      fax
      link
      email
      opened
      closed
      photo {
        filename
        key
      }
    }
  }
`

export const getProvincesWebByCountry = /* GraphQL */ `
  query getProvincesWebByCountry($_id: inputId) {
    getProvincesWebByCountry(_id: $_id) {
      _id
      name
      country {
        _id
        name
        nativeName
      }
      state
      city
      address
      phone1
      phone2
      fax
      link
      email
      opened
      closed
      photo {
        filename
        key
      }
    }
  }
`

export const listProvinces = /* GraphQL */ `
  query listProvinces {
    listProvinces {
      _id
      name
      country {
        _id
        name
        latlng
        translations {
          de
          es
          fr
          ja
          it
          br
          pt
          nl
          hr
          fa
        }
        nativeName
        createdAt
        updatedAt
      }
      state
      city
      address
      phone1
      phone2
      fax
      link
      email
      opened
      closed
      photo {
        filename
        key
      }
      shouldShow
      createdAt
      updatedAt
    }
  }
`
