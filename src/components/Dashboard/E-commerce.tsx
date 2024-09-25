"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import { Breadcrumb } from "@chakra-ui/react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading } from "@chakra-ui/react";


const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  return (
    <>
      <Heading as="h1" size="xl" mb={4}>
        Tableau de Bord
      </Heading>
      <Box className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <Box className="col-span-12 lg:col-span-4">
          <ChartThree />
        </Box>
        <Box
          className="col-span-12 lg:col-span-8"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          p={5}
          borderWidth="1px"
          borderRadius="md"
          bg="white"
          shadow="sm"
        >
          <Heading as="h2" size="md" mb={4}>
            Demandes Récentes
          </Heading>
          <Table variant="simple" size="md" flex="1">
            <Thead>
              <Tr>
                <Th>Type de Demande</Th>
                <Th>Date D'envoi</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Moyens Generaux</Td>
                <Td>03/09/2024</Td>
                <Td>En cours</Td>
              </Tr>
              <Tr>
                <Td>Moyens Generaux</Td>
                <Td>01/09/2024</Td>
                <Td>Approuvée</Td>
              </Tr>
              <Tr>
                <Td>Informatique</Td>
                <Td>31/08/2024</Td>
                <Td>Refusée</Td>
              </Tr>
              <Tr>
                <Td>Moyens Generaux</Td>
                <Td>29/08/2024</Td>
                <Td>Envoyée</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Box className="col-span-12">
          <ChartTwo />
        </Box>
      </Box>
    </>
  );

};

export default ECommerce;
