import React from 'react'
import { useContext } from "react";

import { MainContext } from "./contexts/MainContext";
import AppFilter from "./components/AppFilter";
import Button from "./components/Global/Button/Button";
import EditingForm from "./components/EditingForm";
import UserList from "./components/UserList";
import Form from "./components/Form";

const FilterExperiment = () => {
    // Custom hook: UserData
  // const { users, fetchUsers, deleteUser, hasError } = useUsersData();

  const { isFormVisible } = useContext(MainContext);
  return (
    <>
        <div className="flex items-center justify-between">
        <div>
          <div>
            <AppFilter></AppFilter>
          </div>
          <div>
            <UserList></UserList>
            <Button></Button>
          </div>
        </div>
        {isFormVisible ? (
          <div>
            <EditingForm></EditingForm>
            {/* <Form /> */}
          </div>
        ) : null}

        {/* {!hasError ? (
        users.map((user) => (
          <div key={user.id} onClick={() => deleteUser(user.id)}>
            {user.name} - {user.fName}
          </div>
        ))
      ) : (
        <p>algo fue mal...</p>
      )} */}
      </div>
    </>
  )
}

export default FilterExperiment