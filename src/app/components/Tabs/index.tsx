'use client';

import Link from "next/link";
import { useState } from "react";
import { Tab, TabsContainer } from "./styles";

type TabsProps = {
  $active?: boolean
}

export function Tabs({ $active }: TabsProps) {
  const [activeTab, setActiveTab] = useState($active ? 'squads' : 'usuarios')

  return (
    <TabsContainer>
      <Tab $active={activeTab === 'squads'} onClick={() => setActiveTab('squads')}>
        <Link href="/squad">Squads</Link>
      </Tab>
      <Tab $active={activeTab === 'usuarios'} onClick={() => setActiveTab('usuarios')}>
        <Link href="/user">Usuários</Link>
      </Tab>
    </TabsContainer>
  )
}