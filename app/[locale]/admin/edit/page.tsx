const Edit = () => {
  return (
    <div>
      <div className="admin-table">
        <div className="row admin-table-header yellow">
          <div className="cell">
            ID
          </div>
          <div className="cell">
            Name
          </div>
          <div className="cell">
            Email
          </div>
          <div className="cell">
            Age
          </div>
          <div className="cell">
            Action
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Id">
            1
          </div>
          <div className="cell" data-title="Name">
            Luke Peters
          </div>
          <div className="cell" data-title="Email">
            luke.peters@gmail.com
          </div>
          <div className="cell" data-title="Age">
            25
          </div>
          <div className="cell" data-title="Action">
            ✏️ EDIT
          </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Id">
            2
          </div>
          <div className="cell" data-title="Name">
            Joseph Smith
          </div>
          <div className="cell" data-title="Email">
            joseph.smith@gmail.com
          </div>
          <div className="cell" data-title="Age">
            27
          </div>
          <div className="cell" data-title="Action">
            ✏️ EDIT
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
