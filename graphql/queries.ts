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
        email
        opened
        closed
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
          email
          opened
          closed
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
            email
            opened
            closed
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
        email
        opened
        closed
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
          email
          opened
          closed
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
            email
            opened
            closed
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
          email
          opened
          closed
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
        email
        opened
        closed
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
        email
        opened
        closed
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
          email
          opened
          closed
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
            email
            opened
            closed
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
      email
      opened
      closed
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
        email
        opened
        closed
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
        email
        opened
        closed
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
          email
          opened
          closed
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
            email
            opened
            closed
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
        email
        opened
        closed
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
          email
          opened
          closed
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
            email
            opened
            closed
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
          email
          opened
          closed
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
        email
        opened
        closed
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
        email
        opened
        closed
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
          email
          opened
          closed
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
            email
            opened
            closed
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
      email
      opened
      closed
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
        email
        opened
        closed
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
        email
        opened
        closed
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
          email
          opened
          closed
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
            email
            opened
            closed
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
          email
          opened
          closed
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
        email
        opened
        closed
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
        email
        opened
        closed
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
          email
          opened
          closed
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
            email
            opened
            closed
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
          email
          opened
          closed
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
        email
        opened
        closed
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
        email
        opened
        closed
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
          email
          opened
          closed
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
            email
            opened
            closed
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
          email
          opened
          closed
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
        email
        opened
        closed
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
        email
        opened
        closed
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
          email
          opened
          closed
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
            email
            opened
            closed
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
          email
          opened
          closed
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
        email
        opened
        closed
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
        email
        opened
        closed
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
          email
          opened
          closed
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
            email
            opened
            closed
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
          email
          opened
          closed
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
        email
        opened
        closed
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