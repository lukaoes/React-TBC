const Add = () => {
  return (
    <form className="admin-add-form">
      <div className="admin-add-subtitle text-center text-lg">Add new user!</div>
      <div className="admin-add-input-container ic1">
        <input id="fullname" className="admin-add-input" type="text" placeholder=" " />
        <div className="admin-add-cut"></div>
        <label htmlFor="fullname" className="admin-add-placeholder">Full Name</label>
      </div>
      <div className="admin-add-input-container ic2">
        <input id="email" className="admin-add-input" type="email" placeholder=" " />
        <div className="admin-add-cut admin-add-cut-short"></div>
        <label htmlFor="email" className="admin-add-placeholder">Email</label>
      </div>
      <div className="admin-add-input-container ic2">
        <input id="age" className="admin-add-input" type="number" placeholder=" " />
        <div className="admin-add-cut"></div>
        <label htmlFor="age" className="admin-add-placeholder">Age</label>
      </div>
      <button type="submit" className="admin-add-submit bg-[#27ae60]">ADD USER</button>
    </form>
  )
}

export default Add
