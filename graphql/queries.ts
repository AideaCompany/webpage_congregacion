export const firstLogin = /* GraphQL */ `
  query firstLogin {
    firstLogin
  }
`
export const getAcademicLevels = /* GraphQL */ `
  query getAcademicLevels($_id: inputId) {
    getAcademicLevels(_id: $_id) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
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
export const getCargos = /* GraphQL */ `
  query getCargos($_id: inputId) {
    getCargos(_id: $_id) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const getContentType = /* GraphQL */ `
  query getContentType($_id: inputId) {
    getContentType(_id: $_id) {
      _id
      name
      dbName
      elements {
        _id
        key
        name
        type
        unique
        required
      }
      type
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
export const getDocumentType = /* GraphQL */ `
  query getDocumentType($_id: inputId) {
    getDocumentType(_id: $_id) {
      _id
      name
      short
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
export const getFamilyType = /* GraphQL */ `
  query getFamilyType($_id: inputId) {
    getFamilyType(_id: $_id) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const getFormationStages = /* GraphQL */ `
  query getFormationStages($_id: inputId) {
    getFormationStages(_id: $_id) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const getFraternity = /* GraphQL */ `
  query getFraternity($_id: inputId) {
    getFraternity(_id: $_id) {
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
          photo {
            filename
            key
          }
          shouldShow
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
          photo {
            filename
            key
          }
          shouldShow
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
      photo {
        filename
        key
      }
      shouldShow
    }
  }
`
export const getHermanas = /* GraphQL */ `
  query getHermanas($_id: inputId) {
    getHermanas(_id: $_id) {
      _id
      photo {
        filename
        key
      }
      nameReligion
      name
      birth
      entry
      Country {
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
      nacionalDocument
      nacionalDocumentlexpedite
      foreignDocument
      foreignDocumentlexpedite
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
      obras {
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
      ownerProvince {
        _id
        name
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
      cargo {
        _id
        name
        createdAt
        updatedAt
      }
      formationStages {
        _id
        name
        createdAt
        updatedAt
      }
      academicLevels {
        _id
        name
        createdAt
        updatedAt
      }
      death
      mision {
        _id
        name
      }
      retreat
      motiveRetreat {
        _id
        name
        createdAt
        updatedAt
      }
      bloodGroupRh
      bloodPressure
      diabetes
      healthRecord
      impediments
      skills
      hobbies
      historyFormation {
        formationStages {
          _id
          name
          createdAt
          updatedAt
        }
        date
      }
      documentList {
        _id
        type {
          _id
          name
          short
          createdAt
          updatedAt
        }
        number
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        date
        files {
          filename
          key
        }
      }
      families {
        numberDocument
        familyType {
          _id
          name
          createdAt
          updatedAt
        }
        name
        isDeath
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
        phone
        cel
        healthState
      }
      familyVisitHistory {
        date
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
      }
      madeCargo {
        cargo {
          _id
          name
          createdAt
          updatedAt
        }
        start
        end
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
        place
      }
      createdAt
      updatedAt
      appliedStudies {
        level {
          _id
          name
          createdAt
          updatedAt
        }
        title
        years
        graduateDate
        institution
      }
      formacionInicial {
        startDate
        endDate
        isFormation
      }
      absence {
        motive
        initDate
        endDate
      }
      secularizacion
      exclaustracion
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
export const getMision = /* GraphQL */ `
  query getMision($_id: inputId) {
    getMision(_id: $_id) {
      _id
      name
    }
  }
`
export const getMisionApostol = /* GraphQL */ `
  query getMisionApostol($_id: inputId) {
    getMisionApostol(_id: $_id) {
      _id
      name
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
export const getMotiveRetreat = /* GraphQL */ `
  query getMotiveRetreat($_id: inputId) {
    getMotiveRetreat(_id: $_id) {
      _id
      name
      createdAt
      updatedAt
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
export const getObras = /* GraphQL */ `
  query getObras($_id: inputId) {
    getObras(_id: $_id) {
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
          filename
          key
        }
      }
    }
  }
`
export const getPrivilege = /* GraphQL */ `
  query getPrivilege($_id: String) {
    getPrivilege(_id: $_id) {
      _id
      name
      permissions {
        sectionID
        read
        create
        delete
        update
      }
      createdAt
      updatedAt
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
export const getSection = /* GraphQL */ `
  query getSection($_id: String) {
    getSection(_id: $_id) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const getUser = /* GraphQL */ `
  query getUser($_id: String) {
    getUser(_id: $_id) {
      _id
      name
      lastname
      email
      privilegeID {
        _id
        name
        permissions {
          sectionID
          read
          create
          delete
          update
        }
        createdAt
        updatedAt
      }
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
      active
      country {
        _id
        name
        latlng
        nativeName
        createdAt
        updatedAt
      }
      token
      createdAt
      updatedAt
    }
  }
`
export const listAcademicLevels = /* GraphQL */ `
  query listAcademicLevels {
    listAcademicLevels {
      _id
      name
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
export const listCargos = /* GraphQL */ `
  query listCargos {
    listCargos {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const listContentType = /* GraphQL */ `
  query listContentType {
    listContentType {
      _id
      name
      dbName
      elements {
        _id
        key
        name
        type
        unique
        required
      }
      type
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
export const listDocumentType = /* GraphQL */ `
  query listDocumentType {
    listDocumentType {
      _id
      name
      short
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
export const listFamilyType = /* GraphQL */ `
  query listFamilyType {
    listFamilyType {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const listFormationStages = /* GraphQL */ `
  query listFormationStages {
    listFormationStages {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const listFraternity = /* GraphQL */ `
  query listFraternity($province: ID) {
    listFraternity(province: $province) {
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
          photo {
            filename
            key
          }
          shouldShow
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
      photo {
        filename
        key
      }
      shouldShow
    }
  }
`
export const listHermanas = /* GraphQL */ `
  query listHermanas($province: ID, $formacionInicial: Boolean!) {
    listHermanas(province: $province, formacionInicial: $formacionInicial) {
      _id
      photo {
        filename
        key
      }
      nameReligion
      name
      birth
      entry
      Country {
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
      nacionalDocument
      nacionalDocumentlexpedite
      foreignDocument
      foreignDocumentlexpedite
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
      obras {
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
      ownerProvince {
        _id
        name
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
      cargo {
        _id
        name
        createdAt
        updatedAt
      }
      formationStages {
        _id
        name
        createdAt
        updatedAt
      }
      academicLevels {
        _id
        name
        createdAt
        updatedAt
      }
      death
      mision {
        _id
        name
      }
      retreat
      motiveRetreat {
        _id
        name
        createdAt
        updatedAt
      }
      bloodGroupRh
      bloodPressure
      diabetes
      healthRecord
      impediments
      skills
      hobbies
      historyFormation {
        formationStages {
          _id
          name
          createdAt
          updatedAt
        }
        date
      }
      documentList {
        _id
        type {
          _id
          name
          short
          createdAt
          updatedAt
        }
        number
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        date
        files {
          filename
          key
        }
      }
      families {
        numberDocument
        familyType {
          _id
          name
          createdAt
          updatedAt
        }
        name
        isDeath
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
        phone
        cel
        healthState
      }
      familyVisitHistory {
        date
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
      }
      madeCargo {
        cargo {
          _id
          name
          createdAt
          updatedAt
        }
        start
        end
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
        place
      }
      createdAt
      updatedAt
      appliedStudies {
        level {
          _id
          name
          createdAt
          updatedAt
        }
        title
        years
        graduateDate
        institution
      }
      formacionInicial {
        startDate
        endDate
        isFormation
      }
      absence {
        motive
        initDate
        endDate
      }
      secularizacion
      exclaustracion
    }
  }
`
export const listMision = /* GraphQL */ `
  query listMision {
    listMision {
      _id
      name
    }
  }
`
export const listMisionApostol = /* GraphQL */ `
  query listMisionApostol {
    listMisionApostol {
      _id
      name
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
export const listMotiveRetreat = /* GraphQL */ `
  query listMotiveRetreat {
    listMotiveRetreat {
      _id
      name
      createdAt
      updatedAt
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
export const listPrivilege = /* GraphQL */ `
  query listPrivilege {
    listPrivilege {
      _id
      name
      permissions {
        sectionID
        read
        create
        delete
        update
      }
      createdAt
      updatedAt
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
export const listSection = /* GraphQL */ `
  query listSection {
    listSection {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const listUser = /* GraphQL */ `
  query listUser {
    listUser {
      _id
      name
      lastname
      email
      privilegeID {
        _id
        name
        permissions {
          sectionID
          read
          create
          delete
          update
        }
        createdAt
        updatedAt
      }
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
      active
      country {
        _id
        name
        latlng
        nativeName
        createdAt
        updatedAt
      }
      token
      createdAt
      updatedAt
    }
  }
`
export const newHermanas = /* GraphQL */ `
  query newHermanas($province: ID, $time: String, $formacionInicial: Boolean) {
    newHermanas(province: $province, time: $time, formacionInicial: $formacionInicial) {
      _id
      photo {
        filename
        key
      }
      nameReligion
      name
      birth
      entry
      Country {
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
      nacionalDocument
      nacionalDocumentlexpedite
      foreignDocument
      foreignDocumentlexpedite
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
      obras {
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
      ownerProvince {
        _id
        name
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
      cargo {
        _id
        name
        createdAt
        updatedAt
      }
      formationStages {
        _id
        name
        createdAt
        updatedAt
      }
      academicLevels {
        _id
        name
        createdAt
        updatedAt
      }
      death
      mision {
        _id
        name
      }
      retreat
      motiveRetreat {
        _id
        name
        createdAt
        updatedAt
      }
      bloodGroupRh
      bloodPressure
      diabetes
      healthRecord
      impediments
      skills
      hobbies
      historyFormation {
        formationStages {
          _id
          name
          createdAt
          updatedAt
        }
        date
      }
      documentList {
        _id
        type {
          _id
          name
          short
          createdAt
          updatedAt
        }
        number
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        date
        files {
          filename
          key
        }
      }
      families {
        numberDocument
        familyType {
          _id
          name
          createdAt
          updatedAt
        }
        name
        isDeath
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
        phone
        cel
        healthState
      }
      familyVisitHistory {
        date
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
      }
      madeCargo {
        cargo {
          _id
          name
          createdAt
          updatedAt
        }
        start
        end
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
        place
      }
      createdAt
      updatedAt
      appliedStudies {
        level {
          _id
          name
          createdAt
          updatedAt
        }
        title
        years
        graduateDate
        institution
      }
      formacionInicial {
        startDate
        endDate
        isFormation
      }
      absence {
        motive
        initDate
        endDate
      }
      secularizacion
      exclaustracion
    }
  }
`
export const newHermanasDeath = /* GraphQL */ `
  query newHermanasDeath($province: ID, $time: String, $formacionInicial: Boolean) {
    newHermanasDeath(province: $province, time: $time, formacionInicial: $formacionInicial) {
      _id
      photo {
        filename
        key
      }
      nameReligion
      name
      birth
      entry
      Country {
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
      nacionalDocument
      nacionalDocumentlexpedite
      foreignDocument
      foreignDocumentlexpedite
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
      obras {
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
      ownerProvince {
        _id
        name
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
      cargo {
        _id
        name
        createdAt
        updatedAt
      }
      formationStages {
        _id
        name
        createdAt
        updatedAt
      }
      academicLevels {
        _id
        name
        createdAt
        updatedAt
      }
      death
      mision {
        _id
        name
      }
      retreat
      motiveRetreat {
        _id
        name
        createdAt
        updatedAt
      }
      bloodGroupRh
      bloodPressure
      diabetes
      healthRecord
      impediments
      skills
      hobbies
      historyFormation {
        formationStages {
          _id
          name
          createdAt
          updatedAt
        }
        date
      }
      documentList {
        _id
        type {
          _id
          name
          short
          createdAt
          updatedAt
        }
        number
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        date
        files {
          filename
          key
        }
      }
      families {
        numberDocument
        familyType {
          _id
          name
          createdAt
          updatedAt
        }
        name
        isDeath
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
        phone
        cel
        healthState
      }
      familyVisitHistory {
        date
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
      }
      madeCargo {
        cargo {
          _id
          name
          createdAt
          updatedAt
        }
        start
        end
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
        place
      }
      createdAt
      updatedAt
      appliedStudies {
        level {
          _id
          name
          createdAt
          updatedAt
        }
        title
        years
        graduateDate
        institution
      }
      formacionInicial {
        startDate
        endDate
        isFormation
      }
      absence {
        motive
        initDate
        endDate
      }
      secularizacion
      exclaustracion
    }
  }
`
export const newHermanasRetired = /* GraphQL */ `
  query newHermanasRetired($province: ID, $time: String, $formacionInicial: Boolean) {
    newHermanasRetired(province: $province, time: $time, formacionInicial: $formacionInicial) {
      _id
      photo {
        filename
        key
      }
      nameReligion
      name
      birth
      entry
      Country {
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
      nacionalDocument
      nacionalDocumentlexpedite
      foreignDocument
      foreignDocumentlexpedite
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
      obras {
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
      ownerProvince {
        _id
        name
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
      cargo {
        _id
        name
        createdAt
        updatedAt
      }
      formationStages {
        _id
        name
        createdAt
        updatedAt
      }
      academicLevels {
        _id
        name
        createdAt
        updatedAt
      }
      death
      mision {
        _id
        name
      }
      retreat
      motiveRetreat {
        _id
        name
        createdAt
        updatedAt
      }
      bloodGroupRh
      bloodPressure
      diabetes
      healthRecord
      impediments
      skills
      hobbies
      historyFormation {
        formationStages {
          _id
          name
          createdAt
          updatedAt
        }
        date
      }
      documentList {
        _id
        type {
          _id
          name
          short
          createdAt
          updatedAt
        }
        number
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        date
        files {
          filename
          key
        }
      }
      families {
        numberDocument
        familyType {
          _id
          name
          createdAt
          updatedAt
        }
        name
        isDeath
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
        phone
        cel
        healthState
      }
      familyVisitHistory {
        date
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
      }
      madeCargo {
        cargo {
          _id
          name
          createdAt
          updatedAt
        }
        start
        end
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
        place
      }
      createdAt
      updatedAt
      appliedStudies {
        level {
          _id
          name
          createdAt
          updatedAt
        }
        title
        years
        graduateDate
        institution
      }
      formacionInicial {
        startDate
        endDate
        isFormation
      }
      absence {
        motive
        initDate
        endDate
      }
      secularizacion
      exclaustracion
    }
  }
`
export const totalHermanas = /* GraphQL */ `
  query totalHermanas($time: String, $province: String, $formacionInicial: Boolean) {
    totalHermanas(time: $time, province: $province, formacionInicial: $formacionInicial) {
      totalHermanas
      totalNovicias
      totalHermanasRetreat
      totalHermanasDeath
      totalProvinces
      totalFraternities
      newHermanas
      newHermanasDeath
      newHermanasRetired
    }
  }
`
export const totalHermanasDeath = /* GraphQL */ `
  query totalHermanasDeath($province: ID, $formacionInicial: Boolean) {
    totalHermanasDeath(province: $province, formacionInicial: $formacionInicial) {
      _id
      photo {
        filename
        key
      }
      nameReligion
      name
      birth
      entry
      Country {
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
      nacionalDocument
      nacionalDocumentlexpedite
      foreignDocument
      foreignDocumentlexpedite
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
      obras {
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
      ownerProvince {
        _id
        name
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
      cargo {
        _id
        name
        createdAt
        updatedAt
      }
      formationStages {
        _id
        name
        createdAt
        updatedAt
      }
      academicLevels {
        _id
        name
        createdAt
        updatedAt
      }
      death
      mision {
        _id
        name
      }
      retreat
      motiveRetreat {
        _id
        name
        createdAt
        updatedAt
      }
      bloodGroupRh
      bloodPressure
      diabetes
      healthRecord
      impediments
      skills
      hobbies
      historyFormation {
        formationStages {
          _id
          name
          createdAt
          updatedAt
        }
        date
      }
      documentList {
        _id
        type {
          _id
          name
          short
          createdAt
          updatedAt
        }
        number
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        date
        files {
          filename
          key
        }
      }
      families {
        numberDocument
        familyType {
          _id
          name
          createdAt
          updatedAt
        }
        name
        isDeath
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
        phone
        cel
        healthState
      }
      familyVisitHistory {
        date
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
      }
      madeCargo {
        cargo {
          _id
          name
          createdAt
          updatedAt
        }
        start
        end
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
        place
      }
      createdAt
      updatedAt
      appliedStudies {
        level {
          _id
          name
          createdAt
          updatedAt
        }
        title
        years
        graduateDate
        institution
      }
      formacionInicial {
        startDate
        endDate
        isFormation
      }
      absence {
        motive
        initDate
        endDate
      }
      secularizacion
      exclaustracion
    }
  }
`
export const totalHermanasRetreat = /* GraphQL */ `
  query totalHermanasRetreat($province: ID, $formacionInicial: Boolean) {
    totalHermanasRetreat(province: $province, formacionInicial: $formacionInicial) {
      _id
      photo {
        filename
        key
      }
      nameReligion
      name
      birth
      entry
      Country {
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
      nacionalDocument
      nacionalDocumentlexpedite
      foreignDocument
      foreignDocumentlexpedite
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
      obras {
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
      ownerProvince {
        _id
        name
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
      cargo {
        _id
        name
        createdAt
        updatedAt
      }
      formationStages {
        _id
        name
        createdAt
        updatedAt
      }
      academicLevels {
        _id
        name
        createdAt
        updatedAt
      }
      death
      mision {
        _id
        name
      }
      retreat
      motiveRetreat {
        _id
        name
        createdAt
        updatedAt
      }
      bloodGroupRh
      bloodPressure
      diabetes
      healthRecord
      impediments
      skills
      hobbies
      historyFormation {
        formationStages {
          _id
          name
          createdAt
          updatedAt
        }
        date
      }
      documentList {
        _id
        type {
          _id
          name
          short
          createdAt
          updatedAt
        }
        number
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        date
        files {
          filename
          key
        }
      }
      families {
        numberDocument
        familyType {
          _id
          name
          createdAt
          updatedAt
        }
        name
        isDeath
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
        phone
        cel
        healthState
      }
      familyVisitHistory {
        date
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
      }
      madeCargo {
        cargo {
          _id
          name
          createdAt
          updatedAt
        }
        start
        end
        country {
          _id
          name
          latlng
          nativeName
          createdAt
          updatedAt
        }
        city
        place
      }
      createdAt
      updatedAt
      appliedStudies {
        level {
          _id
          name
          createdAt
          updatedAt
        }
        title
        years
        graduateDate
        institution
      }
      formacionInicial {
        startDate
        endDate
        isFormation
      }
      absence {
        motive
        initDate
        endDate
      }
      secularizacion
      exclaustracion
    }
  }
`
