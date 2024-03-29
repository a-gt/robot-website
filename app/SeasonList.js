'use client';

import styled from 'styled-components';
import { SubTitle } from '@/components/SubTitle';
import {
  Accordion,
  AccordionItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';
import { NotebookIcon } from '@/icons/NotebookIcon';
import { PortfolioIcon } from '@/icons/PortfolioIcon';
import { AnchorIcon } from '@/icons/AnchorIcon';
import { useFadeUp } from '@/lib/useFadeUp';

const Wrapper = styled.div`
  padding: 3rem 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: left;
`;

const Season = styled.div`
  & h1 {
    font-weight: bold;
  }
  & a {
    text-decoration: underline;
  }
`;

const StyledAccordion = styled(Accordion)`
  background-color: #000;
  background-image: linear-gradient(#242325, #171619);
  border: 2px solid #181818;
  box-shadow: inset 0 1px 2px #525154, 0 13px 10px rgba(0, 0, 0, 0.35);
  border-radius: 12px;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const SeasonList = () => {
  const iconClasses =
    'text-xl text-default-500 pointer-events-none flex-shrink-0';

  return (
    <Wrapper>
      <SubTitle>FTC Seasons</SubTitle>
      <StyledAccordion variant="shadow">
        <AccordionItem
          key="1"
          aria-label="FTC Power Play 2022-2023"
          title="FTC Power Play (2022-2023) - Rookie Year"
        >
          <Season>
            <h1>TX-Central North San / Hill Country League Tournament</h1>
            <p>Think Award Winner</p>
            <div className="mt-4" />
            <Dropdown
              showArrow
              classNames={{
                base: 'py-1 px-1 border border-default-200 bg-gradient-to-br from-default-50 to-black',
                arrow: 'bg-default-200 border border-default-200',
              }}
            >
              <DropdownTrigger>
                <Button variant="bordered">Resources</Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Resources from Power Play Season"
              >
                <DropdownItem
                  key="notebook"
                  description="Notebook Link"
                  startContent={<NotebookIcon className={iconClasses} />}
                  endContent={<AnchorIcon className={iconClasses} />}
                  onClick={() =>
                    window
                      .open(
                        'https://1drv.ms/w/s!AobTL4qZfXjKgmfxxtSi9uSxpWga',
                        '_blank'
                      )
                      .focus()
                  }
                >
                  Notebook
                </DropdownItem>
                <DropdownItem
                  key="portfolio"
                  description="Porfolio Link"
                  startContent={<PortfolioIcon className={iconClasses} />}
                  endContent={<AnchorIcon className={iconClasses} />}
                  onClick={() =>
                    window
                      .open(
                        'https://1drv.ms/w/s!AobTL4qZfXjKgiaTWSL6Qsoicg1S',
                        '_blank'
                      )
                      .focus()
                  }
                >
                  Portfolio
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Season>
        </AccordionItem>
      </StyledAccordion>
    </Wrapper>
  );
};
