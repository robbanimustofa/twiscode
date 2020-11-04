import React, { component } from 'react';
import Navbar from './components/Navbar';
import formName from './components/formName'
import './App.css';

function App() {
  return (
    <div>
        <Navbar />
        <div className='color-y App' style={{marginTop:'16px' , marginBottom:'24px'}}>
          <div style={{fontSize:'10px',padding:'10px 0px'}}>
            You don't have an account yet. Please create a new 
            account</div>
        </div>
        <div style={{padding:'0px 20px'}}>
            <div>Create new account</div>
            <div style={{marginTop:'10px'}}>Title</div>
            <div className='d-flex'>
            <div className='custom-control custom-checkbox' style={{marginRight:'5px'}}>
                <input type='checkbox' className='custom-control-input'></input>
                <label className="custom-control-label" htmlFor="customCheck1">Mrs</label>
            </div>
            <div className='custom-control custom-checkbox' style={{marginRight:'5px'}}>
                <input type='checkbox' className='custom-control-input'></input>
                <label className="custom-control-label" htmlFor="customCheck1">Ms</label>
            </div>
            <div className='custom-control custom-checkbox' style={{marginRight:'5px'}}>
                <input type='checkbox' className='custom-control-input'></input>
                <label className="custom-control-label" htmlFor="customCheck1">Mdm</label>
            </div>
            <div className='custom-control custom-checkbox' style={{marginRight:'5px'}}>
                <input type='checkbox' className='custom-control-input'></input>
                <label className="custom-control-label" htmlFor="customCheck1">Mr</label>
            </div>
            <div className='custom-control custom-checkbox' style={{marginRight:'5px'}}>
                <input type='checkbox' className='custom-control-input'></input>
                <label className="custom-control-label" htmlFor="customCheck1">Dr</label>
            </div>
            </div>

            <div style={{marginTop:'16px'}}>
              <div className="row">
                <div className="col">
                  <label htmlFor='' aria-required>Last name</label>
                  <input className="form-control"></input>
                </div>
              </div>
              <div className="row" style={{marginTop:'10px'}}>
                <div className="col">
                  <label htmlFor='' aria-required>First name</label>
                  <input className="form-control"></input>
                </div>
              </div>
            </div>

            <div style={{marginTop:'16px'}}>
              <div style={{marginBottom:'10px'}}>Mobile Phone Number</div>
            <form class="form-inline">
              <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref"></label>
              <select className="custom-select my-1 mr-sm-2">
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="input-group mb-2 mr-sm-2" style={{marginTop:'10px'}}>
                <div className="input-group-prepend">
                  <div className="input-group-text">+62</div>
                  </div>
                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder=""></input>
              </div>
            </form>
            </div>
        </div>
        <div>

        <div style={{marginTop:'16px', padding:'0px 20px'}}>
          <div style={{marginBottom:'10px'}}>Address</div>
          <div style={{marginBottom:'10px'}}>
          <label htmlFor='' aria-required>Address</label>
          <input className="form-control"></input>
          </div>
              <div className="row">
                <div className="col">
                <select className="custom-select my-1 mr-sm-2">
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
                </div>
              </div>
              <div className="row" style={{marginTop:'10px'}}>
                <div className="col">
                <select className="custom-select my-1 mr-sm-2">
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
                </div>
              </div>
            </div>
        </div>

        <div style={{padding:'0px 20px', marginTop:'20px'}}>
          <div>Contact</div>
          <div style={{marginTop:'16px'}}>
              <div className="row">
                <div className="col">
                  <label htmlFor='' aria-required>Email address</label>
                  <input className="form-control"></input>
                </div>
              </div>
              <div className="row" style={{marginTop:'10px'}}>
                <div className="col">
                  <label htmlFor='' aria-required>Date of brith</label>
                  <input className="form-control"></input>
                </div>
              </div>

              <div className="row" style={{marginTop:'10px'}}>
                <div className="col">
                  <label htmlFor='' aria-required>Month</label>
                  <input className="form-control"></input>
                </div>
              </div>

              <div className="row" style={{marginTop:'10px'}}>
                <div className="col">
                  <label htmlFor='' aria-required>Year</label>
                  <input className="form-control"></input>
                </div>
              </div>
            </div>
          </div>

        
    </div>
  );
}

export default App;
