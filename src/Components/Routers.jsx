import { Switch, Route, Redirect }    from 'react-router-dom' ;
import React, { Component } from 'react'                      ;
import Intromap       from './Map.jsx'                        ;

//Scouts
import ScoutsHome     from './Scouts/Home.jsx'    ;
//import ScoutsHistory  from './Scouts/History.jsx' ;
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
import LvettesBadges  from './Louvettes/Badges.jsx'  ;
import LvettesStaff   from './Louvettes/Staff.jsx'   ;
import LvettesKids    from './Louvettes/Kids.jsx'    ;
import LvettesInfo    from './Louvettes/Info.jsx'    ;

//Baladins
import BalasHome      from './Baladins/Home.jsx'    ;
import BalasHistory   from './Baladins/History.jsx' ;
import BalasStaff     from './Baladins/Staff.jsx'   ;
//import BalasKids      from './Baladins/Kids.jsx'    ;
import BalasInfo      from './Baladins/Info.jsx'    ;


//<Route path='/2019/scouts/histoire'      component={ScoutsHistory} />

//<Route path='/2019/baladins/kids'        component={BalasKids}     />

class Routers extends Component{
  render(){
    return(
			<Switch>

                <Route path='/2019/scouts/accueil'       component={ScoutsHome}    />
                <Route path='/2019/scouts/staff'         component={ScoutsStaff}   />
                <Route path='/2019/scouts/kids'          component={ScoutsKids}    />
                <Route path='/2019/scouts/info'          component={ScoutsInfo}    />

                <Route path='/2019/guides/accueil'       component={GuidesHome}    />
                <Route path='/2019/guides/activites'     component={GuidesHistory} />
                <Route path='/2019/guides/staff'         component={GuidesStaff}   />
                <Route path='/2019/guides/kids'          component={GuidesKids}    />
                <Route path='/2019/guides/info'          component={GuidesInfo}    />

                <Route path='/2019/louveteaux/accueil'   component={LveauxHome}    />
                <Route path='/2019/louveteaux/histoire'  component={LveauxHistory} />
                <Route path='/2019/louveteaux/staff'     component={LveauxStaff}   />
                <Route path='/2019/louveteaux/kids'      component={LveauxKids}    />
                <Route path='/2019/louveteaux/info'      component={LveauxInfo}    />

                <Route path='/2019/louvettes/accueil'    component={LvettesHome}   />
                <Route path='/2019/louvettes/badges'     component={LvettesBadges} />
                <Route path='/2019/louvettes/staff'      component={LvettesStaff}  />
                <Route path='/2019/louvettes/kids'       component={LvettesKids}   />
                <Route path='/2019/louvettes/info'       component={LvettesInfo}   />

                <Route path='/2019/baladins/accueil'     component={BalasHome}     />
                <Route path='/2019/baladins/histoire'    component={BalasHistory}  />
                <Route path='/2019/baladins/staff'       component={BalasStaff}    />
                <Route path='/2019/baladins/info'        component={BalasInfo}     />

				<Route path='/2019/carte' component={Intromap}/>
				

				<Redirect from='/'                to='/2019/carte'      />
				<Redirect from='/2019/carte'      to='/2019/carte'      />
				<Redirect from='/2019/scouts'     to='/2019/scouts'     />
				<Redirect from='/2019/guides'     to='/2019/guides'     />
				<Redirect from='/2019/louveteaux' to='/2019/louveteaux' />
				<Redirect from='/2019/louvettes'  to='/2019/louvettes'  />
				<Redirect from='/2019/baladins'   to='/2019/baladins'   />

				<Redirect from='/2019/scouts/accueil'      to='/2019/scouts/accueil'      />
				<Redirect from='/2019/scouts/staff'        to='/2019/scouts/staff'        />
				<Redirect from='/2019/scouts/kids'         to='/2019/scouts/kids'         />
				<Redirect from='/2019/scouts/info'         to='/2019/scouts/info'         />

				<Redirect from='/2019/guides/accueil'      to='/2019/guides/accueil'      />
				<Redirect from='/2019/guides/activites'    to='/2019/guides/activites'    />
				<Redirect from='/2019/guides/staff'        to='/2019/guides/staff'        />
				<Redirect from='/2019/guides/kids'         to='/2019/guides/kids'         />
				<Redirect from='/2019/guides/info'         to='/2019/guides/info'         />

				<Redirect from='/2019/louveteaux/accueil'  to='/2019/louveteaux/accueil'  />
				<Redirect from='/2019/louveteaux/histoire' to='/2019/louveteaux/histoire' />
				<Redirect from='/2019/louveteaux/staff'    to='/2019/louveteaux/staff'    />
				<Redirect from='/2019/louveteaux/kids'     to='/2019/louveteaux/kids'     />
				<Redirect from='/2019/louveteaux/info'     to='/2019/louveteaux/info'     /> 

				<Redirect from='/2019/louvettes/accueil'   to='/2019/louvettes/accueil'   />
				<Redirect from='/2019/louvettes/badges'    to='/2019/louvettes/badges'    />
				<Redirect from='/2019/louvettes/staff'     to='/2019/louvettes/staff'     />
				<Redirect from='/2019/louvettes/kids'      to='/2019/louvettes/kids'      />
				<Redirect from='/2019/louvettes/info'      to='/2019/louvettes/info'      />

				<Redirect from='/2019/baladins/accueil'    to='/2019/baladins/accueil'    />
				<Redirect from='/2019/baladins/histoire'   to='/2019/baladins/histoire'   />
				<Redirect from='/2019/baladins/staff'      to='/2019/baladins/staff'      />
				<Redirect from='/2019/baladins/info'       to='/2019/baladins/info'       />


			</Switch>
	  )
   }
}

export default Routers
