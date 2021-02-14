export const changePassword = /* GraphQL */ `
  mutation changePassword($input: confirmSignUpInput) {
    changePassword(input: $input) {
      token
    }
  }
`
export const confirmLogin = /* GraphQL */ `
  mutation confirmLogin($input: confirmUser) {
    confirmLogin(input: $input) {
      token
    }
  }
`
export const confirmSignUp = /* GraphQL */ `
  mutation confirmSignUp($input: confirmSignUpInput) {
    confirmSignUp(input: $input) {
      token
    }
  }
`
export const confirmUser = /* GraphQL */ `
  mutation confirmUser($input: confirmUser) {
    confirmUser(input: $input) {
      token
    }
  }
`
export const createAcademicLevels = /* GraphQL */ `
  mutation createAcademicLevels($input: AcademicLevelsInput) {
    createAcademicLevels(input: $input) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const createCargos = /* GraphQL */ `
  mutation createCargos($input: CargosInput) {
    createCargos(input: $input) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const createContentType = /* GraphQL */ `
  mutation createContentType($input: ContentTypeInput) {
    createContentType(input: $input) {
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
export const createCountry = /* GraphQL */ `
  mutation createCountry($input: CountryInput) {
    createCountry(input: $input) {
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
export const createDocumentType = /* GraphQL */ `
  mutation createDocumentType($input: DocumentTypeInput) {
    createDocumentType(input: $input) {
      _id
      name
      short
      createdAt
      updatedAt
    }
  }
`
export const createElementContentType = /* GraphQL */ `
  mutation createElementContentType($colletionID: ID, $input: elementToGenerateInput) {
    createElementContentType(colletionID: $colletionID, input: $input) {
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
export const createFamilyType = /* GraphQL */ `
  mutation createFamilyType($input: FamilyTypeInput) {
    createFamilyType(input: $input) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const createFirstUser = /* GraphQL */ `
  mutation createFirstUser($input: userInput) {
    createFirstUser(input: $input) {
      token
    }
  }
`
export const createFormationStages = /* GraphQL */ `
  mutation createFormationStages($input: FormationStagesInput) {
    createFormationStages(input: $input) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const createFraternity = /* GraphQL */ `
  mutation createFraternity($input: FraternityInput) {
    createFraternity(input: $input) {
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
export const createHermanas = /* GraphQL */ `
  mutation createHermanas($input: HermanasInput) {
    createHermanas(input: $input) {
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
export const createMision = /* GraphQL */ `
  mutation createMision($input: MisionInput) {
    createMision(input: $input) {
      _id
      name
    }
  }
`
export const createMisionApostol = /* GraphQL */ `
  mutation createMisionApostol($input: MisionApostolInput) {
    createMisionApostol(input: $input) {
      _id
      name
    }
  }
`
export const createMotiveRetreat = /* GraphQL */ `
  mutation createMotiveRetreat($input: MotiveRetreatInput) {
    createMotiveRetreat(input: $input) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const createObras = /* GraphQL */ `
  mutation createObras($input: ObrasInput) {
    createObras(input: $input) {
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
export const createPrivilege = /* GraphQL */ `
  mutation createPrivilege($input: privilegeInput) {
    createPrivilege(input: $input) {
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
export const createProvinces = /* GraphQL */ `
  mutation createProvinces($input: ProvincesInput) {
    createProvinces(input: $input) {
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
export const createSection = /* GraphQL */ `
  mutation createSection($input: sectionInput) {
    createSection(input: $input) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const createUser = /* GraphQL */ `
  mutation createUser($input: userInput) {
    createUser(input: $input) {
      response
    }
  }
`
export const deleteAcademicLevels = /* GraphQL */ `
  mutation deleteAcademicLevels($input: inputId) {
    deleteAcademicLevels(input: $input) {
      _id
    }
  }
`
export const deleteAcademicLevelsAll = /* GraphQL */ `
  mutation deleteAcademicLevelsAll {
    deleteAcademicLevelsAll {
      _id
    }
  }
`
export const deleteCargos = /* GraphQL */ `
  mutation deleteCargos($input: inputId) {
    deleteCargos(input: $input) {
      _id
    }
  }
`
export const deleteCargosAll = /* GraphQL */ `
  mutation deleteCargosAll {
    deleteCargosAll {
      _id
    }
  }
`
export const deleteContentType = /* GraphQL */ `
  mutation deleteContentType($input: inputId) {
    deleteContentType(input: $input) {
      _id
    }
  }
`
export const deleteContentTypeAll = /* GraphQL */ `
  mutation deleteContentTypeAll {
    deleteContentTypeAll {
      _id
    }
  }
`
export const deleteCountry = /* GraphQL */ `
  mutation deleteCountry($input: inputId) {
    deleteCountry(input: $input) {
      _id
    }
  }
`
export const deleteCountryAll = /* GraphQL */ `
  mutation deleteCountryAll {
    deleteCountryAll {
      _id
    }
  }
`
export const deleteDocumentType = /* GraphQL */ `
  mutation deleteDocumentType($input: inputId) {
    deleteDocumentType(input: $input) {
      _id
    }
  }
`
export const deleteDocumentTypeAll = /* GraphQL */ `
  mutation deleteDocumentTypeAll {
    deleteDocumentTypeAll {
      _id
    }
  }
`
export const deleteElementContentType = /* GraphQL */ `
  mutation deleteElementContentType($colletionID: ID, $input: ID) {
    deleteElementContentType(colletionID: $colletionID, input: $input) {
      _id
    }
  }
`
export const deleteFamilyType = /* GraphQL */ `
  mutation deleteFamilyType($input: inputId) {
    deleteFamilyType(input: $input) {
      _id
    }
  }
`
export const deleteFamilyTypeAll = /* GraphQL */ `
  mutation deleteFamilyTypeAll {
    deleteFamilyTypeAll {
      _id
    }
  }
`
export const deleteFormationStages = /* GraphQL */ `
  mutation deleteFormationStages($input: inputId) {
    deleteFormationStages(input: $input) {
      _id
    }
  }
`
export const deleteFormationStagesAll = /* GraphQL */ `
  mutation deleteFormationStagesAll {
    deleteFormationStagesAll {
      _id
    }
  }
`
export const deleteFraternity = /* GraphQL */ `
  mutation deleteFraternity($input: inputId) {
    deleteFraternity(input: $input) {
      _id
    }
  }
`
export const deleteFraternityAll = /* GraphQL */ `
  mutation deleteFraternityAll {
    deleteFraternityAll {
      _id
    }
  }
`
export const deleteHermanas = /* GraphQL */ `
  mutation deleteHermanas($input: inputId) {
    deleteHermanas(input: $input) {
      _id
    }
  }
`
export const deleteHermanasAll = /* GraphQL */ `
  mutation deleteHermanasAll($formacionInicial: Boolean!) {
    deleteHermanasAll(formacionInicial: $formacionInicial) {
      _id
    }
  }
`
export const deleteMision = /* GraphQL */ `
  mutation deleteMision($input: inputId) {
    deleteMision(input: $input) {
      _id
    }
  }
`
export const deleteMisionAll = /* GraphQL */ `
  mutation deleteMisionAll {
    deleteMisionAll {
      _id
    }
  }
`
export const deleteMisionApostol = /* GraphQL */ `
  mutation deleteMisionApostol($input: inputId) {
    deleteMisionApostol(input: $input) {
      _id
    }
  }
`
export const deleteMisionApostolAll = /* GraphQL */ `
  mutation deleteMisionApostolAll {
    deleteMisionApostolAll {
      _id
    }
  }
`
export const deleteMotiveRetreat = /* GraphQL */ `
  mutation deleteMotiveRetreat($input: inputId) {
    deleteMotiveRetreat(input: $input) {
      _id
    }
  }
`
export const deleteMotiveRetreatAll = /* GraphQL */ `
  mutation deleteMotiveRetreatAll {
    deleteMotiveRetreatAll {
      _id
    }
  }
`
export const deleteObras = /* GraphQL */ `
  mutation deleteObras($input: inputId) {
    deleteObras(input: $input) {
      _id
    }
  }
`
export const deleteObrasAll = /* GraphQL */ `
  mutation deleteObrasAll {
    deleteObrasAll {
      _id
    }
  }
`
export const deletePrivilege = /* GraphQL */ `
  mutation deletePrivilege($input: deletePrivilegeInput) {
    deletePrivilege(input: $input) {
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
export const deletePrivilegeAll = /* GraphQL */ `
  mutation deletePrivilegeAll($input: deletePrivilegeInput) {
    deletePrivilegeAll(input: $input) {
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
export const deleteProvinces = /* GraphQL */ `
  mutation deleteProvinces($input: inputId) {
    deleteProvinces(input: $input) {
      _id
    }
  }
`
export const deleteProvincesAll = /* GraphQL */ `
  mutation deleteProvincesAll {
    deleteProvincesAll {
      _id
    }
  }
`
export const deleteSection = /* GraphQL */ `
  mutation deleteSection($input: deleteSectionInput) {
    deleteSection(input: $input) {
      _id
    }
  }
`
export const deleteSectionAll = /* GraphQL */ `
  mutation deleteSectionAll($input: deleteSectionInput) {
    deleteSectionAll(input: $input) {
      _id
    }
  }
`
export const deleteUser = /* GraphQL */ `
  mutation deleteUser($input: deleteUserInput) {
    deleteUser(input: $input) {
      _id
    }
  }
`
export const forgotPassword = /* GraphQL */ `
  mutation forgotPassword($input: forgotPassword) {
    forgotPassword(input: $input) {
      response
    }
  }
`
export const login = /* GraphQL */ `
  mutation login($input: loginInput) {
    login(input: $input) {
      response
    }
  }
`
export const updateAcademicLevels = /* GraphQL */ `
  mutation updateAcademicLevels($input: updateAcademicLevelsInput) {
    updateAcademicLevels(input: $input) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const updateCargos = /* GraphQL */ `
  mutation updateCargos($input: updateCargosInput) {
    updateCargos(input: $input) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const updateContentType = /* GraphQL */ `
  mutation updateContentType($input: updateContentTypeInput) {
    updateContentType(input: $input) {
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
export const updateCountry = /* GraphQL */ `
  mutation updateCountry($input: updateCountryInput) {
    updateCountry(input: $input) {
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
export const updateDocumentType = /* GraphQL */ `
  mutation updateDocumentType($input: updateDocumentTypeInput) {
    updateDocumentType(input: $input) {
      _id
      name
      short
      createdAt
      updatedAt
    }
  }
`
export const updateElementContentType = /* GraphQL */ `
  mutation updateElementContentType($colletionID: ID, $input: elementToGenerateInput) {
    updateElementContentType(colletionID: $colletionID, input: $input) {
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
export const updateFamilyType = /* GraphQL */ `
  mutation updateFamilyType($input: updateFamilyTypeInput) {
    updateFamilyType(input: $input) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const updateFormationStages = /* GraphQL */ `
  mutation updateFormationStages($input: updateFormationStagesInput) {
    updateFormationStages(input: $input) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const updateFraternity = /* GraphQL */ `
  mutation updateFraternity($input: updateFraternityInput) {
    updateFraternity(input: $input) {
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
export const updateHermanas = /* GraphQL */ `
  mutation updateHermanas($input: updateHermanasInput) {
    updateHermanas(input: $input) {
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
export const updateMision = /* GraphQL */ `
  mutation updateMision($input: updateMisionInput) {
    updateMision(input: $input) {
      _id
      name
    }
  }
`
export const updateMisionApostol = /* GraphQL */ `
  mutation updateMisionApostol($input: updateMisionApostolInput) {
    updateMisionApostol(input: $input) {
      _id
      name
    }
  }
`
export const updateMotiveRetreat = /* GraphQL */ `
  mutation updateMotiveRetreat($input: updateMotiveRetreatInput) {
    updateMotiveRetreat(input: $input) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const updateObras = /* GraphQL */ `
  mutation updateObras($input: updateObrasInput) {
    updateObras(input: $input) {
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
export const updatePrivilege = /* GraphQL */ `
  mutation updatePrivilege($input: updatePrivilegeInput) {
    updatePrivilege(input: $input) {
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
export const updateProvinces = /* GraphQL */ `
  mutation updateProvinces($input: updateProvincesInput) {
    updateProvinces(input: $input) {
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
export const updateSection = /* GraphQL */ `
  mutation updateSection($input: updateSectionInput) {
    updateSection(input: $input) {
      _id
      name
      createdAt
      updatedAt
    }
  }
`
export const updateUser = /* GraphQL */ `
  mutation updateUser($input: updateUserInput) {
    updateUser(input: $input) {
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
