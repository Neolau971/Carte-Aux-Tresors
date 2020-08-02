import { Form, FormControl } from 'react-bootstrap'
import React from 'react'
import './search-component.css'


export class SearchComponent extends React.Component {
    render() {
        return (
            <div className="SearchCss">
                <Form inline>
                    <FormControl
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                </Form>
            </div>
        )
    }
}