import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import rawPage1 from "@assets/Screenshot_20250806-080508_1765955371509.png";
import rawPage2 from "@assets/Screenshot_20250806-080758_1765955371510.png";
import rawPage3 from "@assets/Screenshot_20250806-081600_1765955371512.png";
import rawPage4 from "@assets/Screenshot_20250806-081901_1765955371514.png";

const rawPages = [
  rawPage1,
  rawPage2,
  rawPage3,
  rawPage4
];

const polishedPages = [
  "https://modern-landing--gaiusjim5.replit.app/assets/Screenshot_20250806-081124_1765944738934-CQFu-XKs.png",
  "https://modern-landing--gaiusjim5.replit.app/assets/Screenshot_20250806-081153_1765944738935-C-cE8dJi.png",
  "https://modern-landing--gaiusjim5.replit.app/assets/Screenshot_20250806-081600_1765944790893-D4KRzdW3.png",
  "https://modern-landing--gaiusjim5.replit.app/assets/Screenshot_20250806-081622_1765944831009-3RZFEcGz.png"
];

export function Comparison() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Structural Copyedit Sample</h2>
          <p className="text-muted-foreground">See the difference before and after professional editing.</p>
        </div>

        <Tabs defaultValue="raw" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="raw">Raw Draft</TabsTrigger>
              <TabsTrigger value="polished">Polished Edit</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="raw">
            <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
              <div className="mb-4 text-center">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-2">Before</span>
                <p className="text-muted-foreground text-sm">Initial draft with structural inconsistencies.</p>
              </div>
              <Carousel className="w-full max-w-3xl mx-auto">
                <CarouselContent>
                  {rawPages.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="overflow-hidden shadow-sm">
                          <CardContent className="flex aspect-[3/4] items-center justify-center p-0 bg-white">
                            <img 
                              src={src} 
                              alt={`Raw Page ${index + 1}`} 
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://placehold.co/600x800/png?text=Raw+Draft+Page+${index+1}`;
                              }}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </TabsContent>

          <TabsContent value="polished">
            <div className="bg-green-50/50 p-8 rounded-2xl border border-green-100">
              <div className="mb-4 text-center">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-2">After</span>
                <p className="text-muted-foreground text-sm">Polished document with improved flow and formatting.</p>
              </div>
              <Carousel className="w-full max-w-3xl mx-auto">
                <CarouselContent>
                  {polishedPages.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="overflow-hidden shadow-sm">
                          <CardContent className="flex aspect-[3/4] items-center justify-center p-0 bg-white">
                            <img 
                              src={src} 
                              alt={`Polished Page ${index + 1}`} 
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://placehold.co/600x800/png?text=Polished+Page+${index+1}`;
                              }}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
