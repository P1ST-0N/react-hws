import PropTypes from 'prop-types';
import {Main} from 'components/Container/Container.styled';

export const Container = ({children}) => {
  return <Main>{children}</Main>;
};

Container.propTypes = {
  children: PropTypes.node,
};
