import React, {Component} from 'react';

export class AdminPanel extends Component {
    static displayName = AdminPanel.name;

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}