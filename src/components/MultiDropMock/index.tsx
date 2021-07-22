import "./styles.css"
function MultiDropMock() {

    return (

        <div className="dds__btn-dropdown dds__multi-select dds__multiDropMock" tabIndex={-1}>
            <button className="dds__btn dds__btn-secondary dds__text-truncate dds__d-flex" data-toggle="dds__dropdown" data-target="#buttonMultiSelectDropdown" tabIndex={0} aria-expanded="false" aria-controls="buttonDropdownPrimary">
                <span className="dds__text-truncate dds__mb-0">Multi-select Dropdown Button Mock
                </span>
                <svg className="dds__arrow-tri-solid-right dds__align-self-center dds__ml-1" viewBox="0 0 32 32" focusable="false" aria-hidden="true">
                    <title>dds__arrow-tri-solid-right
                    </title>
                    <path d="M21.997 16.002l-11.994-12.356v24.708z">
                    </path>
                </svg>
            </button>
            <ul id="buttonMultiSelectDropdown" className="dds__button-dropdown-container dds__collapse" role="menu">
                <li className="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabIndex={0} aria-checked="false">
                    <label className="dds__form-check-label" htmlFor="multiSelectCheckboxName1">
                        <input type="checkbox" id="multiSelectCheckboxName1" name="multiSelectCheckboxName1" tabIndex={-1} className="dds__form-check-input" />
                        <span>Value 1
                        </span>
                    </label>
                </li>
                <li className="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabIndex={0} aria-checked="false">
                    <label className="dds__form-check-label" htmlFor="multiSelectCheckboxName2">
                        <input type="checkbox" id="multiSelectCheckboxName2" name="multiSelectCheckboxName2" tabIndex={-1} className="dds__form-check-input" />
                        <span>Value 2
                        </span>
                    </label>
                </li>
                <li className="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabIndex={0} aria-checked="false">
                    <label className="dds__form-check-label" htmlFor="multiSelectCheckboxName3">
                        <input type="checkbox" id="multiSelectCheckboxName3" name="multiSelectCheckboxName3" tabIndex={-1} className="dds__form-check-input" />
                        <span>Value 3
                        </span>
                    </label>
                </li>
                <li className="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabIndex={0} aria-checked="false">
                    <label className="dds__form-check-label" htmlFor="multiSelectCheckboxName4">
                        <input type="checkbox" id="multiSelectCheckboxName4" name="multiSelectCheckboxName4" tabIndex={-1} className="dds__form-check-input" />
                        <span>Value 4
                        </span>
                    </label>
                </li>
                <li className="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabIndex={0} aria-checked="false">
                    <label className="dds__form-check-label" htmlFor="multiSelectCheckboxName5">
                        <input type="checkbox" id="multiSelectCheckboxName5" name="multiSelectCheckboxName5" tabIndex={-1} className="dds__form-check-input" />
                        <span>Value 5
                        </span>
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default MultiDropMock;
