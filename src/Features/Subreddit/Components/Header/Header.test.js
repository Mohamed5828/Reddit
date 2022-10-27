import Header from "./Header";
import {render,screen} from "@testing-library/react";

test('Should Show Header', ()=> {

    render(<Header />)
    screen.debug()

})