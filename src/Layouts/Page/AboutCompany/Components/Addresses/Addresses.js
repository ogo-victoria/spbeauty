import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from "styled-components";

const AddressesWrapped = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid rgba(100, 116, 139, 0.12);
    border-radius: 8px;
    padding: 24px;
    display: flex;
    flex-direction: column;
`;

function Addresses() {
    return (
        <AddressesWrapped className='d-inline-flex flex-column justify-content-between'>
            <div className='d-inline-flex flex-column'>
                <div className='title mb-3'>Адреса заведений</div>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </AddressesWrapped>
    );
}

export default Addresses;