import { Switch, Route, Redirect }    from 'react-router-dom' ;
import React, { Component } from 'react'                      ;
import Intromap       from './Map.jsx'                        ;

//Scouts
import ScoutsHome     from './Scouts/Home.jsx'    ;
import ScoutsHistory  from './Scouts/History.jsx' ;
import ScoutsStaff    from './Scouts/Staff.jsx'   ;
import ScoutsKids     from './Scouts/Kids.jsx'    ;
import ScoutsInfo     from './Scouts/Info.jsx'    ;

//Guides
import GuidesHome     from './Guides/Home.jsx'       ;
import GuidesHistory  from './Guides/Activities.jsx' ;
import GuidesStaff    from './Guides/Staff.jsx'      ;
import GuidesKids     from './Guides/Kids.jsx'       ;
import GuidesInfo     from './Guides/Info.jsx'       ;

//Louveteaux
import LveauxHome     from './Louveteaux/Home.jsx'    ;
import LveauxHistory  from './Louveteaux/History.jsx' ;
import LveauxStaff    from './Louveteaux/Staff.jsx'   ;
import LveauxKids     from './Louveteaux/Kids.jsx'    ;
import LveauxInfo     from './Louveteaux/Info.jsx'    ;

//Louvettes
import LvettesHome    from './Louvettes/Home.jsx'    ;
import LvettesHistory from './Louvettes/History.jsx' ;
import LvettesStaff   from './Louvettes/Staff.jsx'   ;
import LvettesKids    from './Louvettes/Kids.jsx'    ;
import LvettesInfo    from './Louvettes/Info.jsx'    ;

//Baladins
import BalasHome      from './Baladins/Home.jsx'    ;
import BalasHistory   from './Baladins/History.jsx' ;
import BalasStaff     from './Baladins/Staff.jsx'   ;
import BalasKids      from './Baladins/Kids.jsx'    ;
import BalasInfo      from './Baladins/Info.jsx'    ;




class Routers extends Component{
  render(){
    return(
			<Switch>

                <Route path='/grandcamp39/scouts/accueil'       component={ScoutsHome}    />
                <Route path='/grandcamp39/scouts/histoire'      component={ScoutsHistory} />
                <Route path='/grandcamp39/scouts/staff'         component={ScoutsStaff}   />
                <Route path='/grandcamp39/scouts/kids'          component={ScoutsKids}    />
                <Route path='/grandcamp39/scouts/info'          component={ScoutsInfo}    />

                <Route path='/grandcamp39/guides/accueil'       component={GuidesHome}    />
                <Route path='/grandcamp39/guides/activites'     component={GuidesHistory} />
                <Route path='/grandcamp39/guides/staff'         component={GuidesStaff}   />
                <Route path='/grandcamp39/guides/kids'          component={GuidesKids}    />
                <Route path='/grandcamp39/guides/info'          component={GuidesInfo}    />

                <Route path='/grandcamp39/louveteaux/accueil'   component={LveauxHome}    />
                <Route path='/grandcamp39/louveteaux/histoire'  component={LveauxHistory} />
                <Route path='/grandcamp39/louveteaux/staff'     component={LveauxStaff}   />
                <Route path='/grandcamp39/louveteaux/kids'      component={LveauxKids}    />
                <Route path='/grandcamp39/louveteaux/info'      component={LveauxInfo}    />

                <Route path='/grandcamp39/louvettes/accueil'    component={LvettesHome}   />
                <Route path='/grandcamp39/louvettes/histoire'   component={LvettesHistory}/>
                <Route path='/grandcamp39/louvettes/staff'      component={LvettesStaff}  />
                <Route path='/grandcamp39/louvettes/kids'       component={LvettesKids}   />
                <Route path='/grandcamp39/louvettes/info'       component={LvettesInfo}   />

                <Route path='/grandcamp39/baladins/accueil'     component={BalasHome}     />
                <Route path='/grandcamp39/baladins/histoire'    component={BalasHistory}  />
                <Route path='/grandcamp39/baladins/staff'       component={BalasStaff}    />
                <Route path='/grandcamp39/baladins/kids'        component={BalasKids}     />
                <Route path='/grandcamp39/baladins/info'        component={BalasInfo}     />


				<Route path='/grandcamp39/carte' component={Intromap}/>

				<Redirect from='/'                       to='/grandcamp39/carte'      />
				<Redirect from='/grandcamp39/carte'      to='/grandcamp39/carte'      />
				<Redirect from='/grandcamp39/scouts'     to='/grandcamp39/scouts'     />
				<Redirect from='/grandcamp39/guides'     to='/grandcamp39/guides'     />
				<Redirect from='/grandcamp39/louveteaux' to='/grandcamp39/louveteaux' />
				<Redirect from='/grandcamp39/louvettes'  to='/grandcamp39/louvettes'  />
				<Redirect from='/grandcamp39/baladins'   to='/grandcamp39/baladins'   />




			</Switch>
	  )
   }
}

export default Routers


















/*
				<Route path='/grandcamp39/carte'      render={() => <Intromap       routerProps={{socket:socket}} /> } />  
				<Route path='/grandcamp39/scouts'     render={() => <ScoutsPage     routerProps={{socket:socket}} /> } />  
				<Route path='/grandcamp39/guides'     render={() => <GuidesPage     routerProps={{socket:socket}} /> } />
				<Route path='/grandcamp39/louveteaux' render={() => <LouveteauxPage routerProps={{socket:socket}} /> } />  
				<Route path='/grandcamp39/louvettes'  render={() => <LouvettesPage  routerProps={{socket:socket}} /> } />
				<Route path='/grandcamp39/baladins'   render={() => <BaladinsPage   routerProps={{socket:socket}} /> } />

				
				<Route path='/grandcamp39/scouts'     component={ScoutsPage}     />  
				<Route path='/grandcamp39/guides'     component={GuidesPage}     />
				<Route path='/grandcamp39/louveteaux' component={LouveteauxPage} />
				<Route path='/grandcamp39/louvettes'  component={LouvettesPage}  />
				<Route path='/grandcamp39/baladins'   component={BaladinsPage}   />


				<Redirect from='/grandcamp39/scouts/accueil'   to='/grandcamp39/scouts/accueil'  />
				<Redirect from='/grandcamp39/scouts/histoire'  to='/grandcamp39/scouts/histoire' />
				<Redirect from='/grandcamp39/scouts/staff'     to='/grandcamp39/scouts/staff'    />
				<Redirect from='/grandcamp39/scouts/tonviking' to='/grandcamp39/scouts/tonviking'/>
				<Redirect from='/grandcamp39/scouts/info'      to='/grandcamp39/scouts/info  '   />

				<Redirect from='/grandcamp39/scouts/accueil'   to='/grandcamp39/scouts/accueil'  />
				<Redirect from='/grandcamp39/scouts/histoire'  to='/grandcamp39/scouts/histoire' />
				<Redirect from='/grandcamp39/scouts/staff'     to='/grandcamp39/scouts/staff'    />
				<Redirect from='/grandcamp39/scouts/tonviking' to='/grandcamp39/scouts/tonviking'/>
				<Redirect from='/grandcamp39/scouts/info'      to='/grandcamp39/scouts/info  '   />
*/
