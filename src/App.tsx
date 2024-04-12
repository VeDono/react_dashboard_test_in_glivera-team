import { SideMenu } from './components/SideMenu';
import { WorkRealm } from './components/WorkRealm';

function App() {
  return (
    <section className="dashboardApp">
      <SideMenu />

      <WorkRealm />
    </section>
  );
}

export default App;
