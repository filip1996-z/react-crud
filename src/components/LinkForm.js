import React from 'react';

const LinkForm = () => {
    return (
        <form className="card card-body">
            <div className="form-group input-grup">
                <div className="input-group-text bg-ligth">
                 <i class="material-icons">insert-link</i>
                </div>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="hhtps://SoulAssassins.com"
                    name="url"
                    />
            </div>

        </form>
    )
}

export default LinkForm;