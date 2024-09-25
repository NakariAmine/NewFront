"use client";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

const DemandModal = () => {
  interface Item {
    itemId: number;
    name: string;
    category: string;
    quantity: number;
    description: string;
    selectedQuantity?: number;
    totalSelectedQuantity?: number;
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  const items: Item[] = [
    {
      itemId: 2,
      name: "Chaise de Bureau",
      category: "Moyens Generaux",
      quantity: 30,
      description: "Chaise de bureau ergonomique avec soutien lombaire.",
    },
    {
      itemId: 4,
      name: "Cahier",
      category: "Moyens Generaux",
      quantity: 200,
      description: "Un ensemble de 5 cahiers à lignes.",
    },
    {
      itemId: 5,
      name: "Lampe de Bureau",
      category: "Moyens Generaux",
      quantity: 60,
      description: "Lampe de bureau LED avec luminosité réglable.",
    },
    {
      itemId: 9,
      name: "Armoire de Rangement",
      category: "Moyens Generaux",
      quantity: 25,
      description: "Armoire de rangement en métal avec serrure.",
    },
    {
      itemId: 10,
      name: "Stylo à Bille",
      category: "Moyens Generaux",
      quantity: 500,
      description: "Un ensemble de 10 stylos à bille noirs.",
    },
    {
      itemId: 11,
      name: "Table de Réunion",
      category: "Moyens Generaux",
      quantity: 10,
      description: "Table de réunion en bois pour 8 personnes.",
    },
  ];

  return (
    <Box>
      <Button onClick={onOpen}>Voir la première demande</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details de la Demande - Moyens Generaux</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Nom de l'Article</Th>
                  <Th>Quantité</Th>
                </Tr>
              </Thead>
              <Tbody>
                {items.map((item) => (
                  <Tr key={item.itemId}>
                    <Td>{item.name}</Td>
                    <Td>{item.quantity}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DemandModal;
