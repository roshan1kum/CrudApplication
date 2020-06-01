import { routes } from "./app-routing.module"
import { HomeComponent } from './home/home.component'


describe('routes',()=>{
    it('should contain routes for /home',()=>{
        expect(routes).toContain({path:'home',component:HomeComponent})
    })
})