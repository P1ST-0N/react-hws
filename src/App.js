import Section from './components/Section';
import SocialProfile from './components/SocialProfile';

import user from './data/user.json';

export default function App() {
  return (
    <div>
      <Section title={"Task-1 'Social network profile'"}>
        <SocialProfile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
    </div>
  );
}
