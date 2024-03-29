'use client';

import styled from 'styled-components';
import { SubTitle } from '@/components/SubTitle';
import { Image, Button } from '@nextui-org/react';
import { useFadeUp } from '@/lib/useFadeUp';
import { useRouter } from 'next/navigation';
import NextImage from 'next/image';

const Wrapper = styled.div`
  padding: 3rem 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: left;
  display: grid;
  grid-template-columns: 100%;
  gap: 2em;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const About = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <div>
        <SubTitle>Our Team</SubTitle>
        <p className="mb-4 italic" {...useFadeUp()}>
          <b className="font-black">Mission statement:</b> Our goal is to
          introduce the STEM program to families outside of school so they may
          become the leaders of the next generation of robotics. We do this by
          creating a stable and functional robotics team that promotes learning,
          diversity, determination, and success.
        </p>
        <p {...useFadeUp()} className="mb-4">
          We are a community team located in San Antonio, Texas whose goal is to
          create an advanced program to teach students CAD, coding, mechanics,
          and team management. Our team is comprised of students from 5 separate
          schools to cultivate diversity in ideas.
        </p>
        <Button
          variant="bordered"
          onPress={() => router.push('/our-team')}
          {...useFadeUp()}
        >
          Learn More
        </Button>
      </div>
      <Image
        src="/_next/image?url=%2Fteam.jpeg&w=640&q=75"
        alt="Team Photo after THINK award"
        isBlurred
        {...useFadeUp({ threshold: 0.25 })}
      />
    </Wrapper>
  );
};
