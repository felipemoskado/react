import React from 'react';
import { connect } from 'react-redux';

const Clients = (props) => {
    const { clients } = props;

    return clients.map(client => (
        <div className="margin-left: 20px<br></br>">
            <h3>Cliente</h3>
            <span>Name: {client.name}</span>
            <br></br>
            {constructMenu(client.menu)}
            <hr></hr>
        </div>
    ));
}

const constructMenu = (menu) => {
    return menu.map(m => (
        <div>
            <h3>Menu</h3>
            <span>Name: {m.name}</span>
            <br></br>
            <h3>Items:</h3>
            {constructMenuItems(m.items)}
        </div>
    ))
}

const constructMenuItems = (items) => {
    return items.map(i => (
        <div>
            <span>Id: {i.id}</span>
            <br></br>
            <span>Name: {i.name}</span>
            <br></br>
            <span>Description: {i.desc}</span>
            <br></br>
            <span>Price: {i.price}</span>
            <br></br>
            <br></br>
        </div>
    ))

}

const mapStateToProps = store => ({
  clients: store.clientState.clients
});

export default connect(mapStateToProps)(Clients);