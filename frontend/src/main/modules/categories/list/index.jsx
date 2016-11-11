import React from 'react'
import { connect } from 'react-redux'
import { categoriesList } from '../accessors'
import * as Actions from '../actions'

@connect(
  state => ({
    list: categoriesList(state),
  }), {
    create: Actions.add,
  }
)
export default class CategoryList extends React.Component {

  render() {
    const { list, create } = this.props
    return (
      <div className="container">
        <h1>Categories</h1>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {list.size == 0 ?
              <tr>
                <td colSpan={2}>There's no categories at the moment.</td>
              </tr>
            :
              list.map(c =>
                <tr key={c.getIn(['_links','self','href'])}>
                  <td>{c.getIn(['_links','self','href'])}</td>
                  <td>{c.get('name')}</td>
                </tr>
              )
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} className="text-right">
                <form className="form-inline" onSubmit={e => {
                  e.preventDefault();
                  create(e.target.elements.name.value);
                }}>
                  <div className="form-group">
                    <label>Create category with name:</label>{' '}
                    <input required={true} className="form-control" name="name" />
                  </div>
                  {' '}
                  <button className="btn btn-primary">
                    Create
                  </button>
                </form>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}
