/**
 *
 * Navigation
 * ------------------------------------------------
 * A navigation system using react-router.
 * Typically more time would be invested into making this
 * component handle routing for the website's container "pages".
 *
 */

import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';

import Selectrix from 'react-selectrix';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Components
import Button from '../Button';
import Logo from '../Logo';

// StyledComponents
import NavigationBar from './NavigationBar';

const SelectrixStyled = styled.div`
  .rs-searchable .rs-toggle .rs-focused {
    background: #e2d4e8;
  }

  .rs-option {
    color: #000;
  }

  .react-selectrix .rs-option {
    color: #000;
    &:hover {
      background-color: #e2d4e8;
    }
  }

  .react-selectrix .rs-option:not(.disabled).selected {
    background: #e2d4e8;
  }

  input {
    color: #000;
  }
`;

const DatePickerStyled = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    background-color: #fff;
    color: #000;
    height: 4vh;
    padding: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const SelectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
      endDate: date,
    });
  }

  render() {
    return (
      <div>
        <Flex>
          <NavigationBar>
            <Box width={2 / 12}>
              <Logo alt="Hotel Tonight" />
            </Box>
            <Box width={6 / 12}>
              <SelectionWrapper>
                <SelectrixStyled>
                  <Selectrix
                    height="50vh"
                    placeholder="Where:"
                    customScrollbar
                    materialize
                    options={[
                      {
                        key: 'popular',
                        label: 'Popular',
                      },
                      {
                        key: 'napa',
                        label: 'Napa, CA',
                      },
                      {
                        key: 'sonoma',
                        label: 'Sonoma, CA',
                      },
                      {
                        key: 'losangeles',
                        label: 'Los Angeles',
                      },
                      {
                        key: 'newyork',
                        label: 'New York, NY',
                      },
                      {
                        key: 'monterey',
                        label: 'Monterey, CA',
                      },
                      {
                        key: 'lasvegas',
                        label: 'Las Vegas, Strip - NV',
                      },
                      {
                        key: 'santacruz',
                        label: 'Santa Cruz, CA',
                      },
                      {
                        key: 'laketahoe',
                        label: 'Lake Tahoe',
                      },
                      {
                        key: 'seattle',
                        label: 'Seattle',
                      },
                    ]}
                    onChange={value => console.log(value)}
                  />
                </SelectrixStyled>

                <DatePickerStyled>
                  <DatePicker
                    placeholderText="Click to select start date"
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                  />
                  <DatePicker
                    placeholderText="Click to select end date"
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                  />
                </DatePickerStyled>
              </SelectionWrapper>
            </Box>
            <Box width={2 / 12}>
              <Button label="Sign Up | Sign In" link="/about" prefetch />
            </Box>
          </NavigationBar>
        </Flex>
      </div>
    );
  }
}

Navigation.propTypes = {};

export default Navigation;
